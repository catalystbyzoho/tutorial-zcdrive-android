package com.catalyst.zcdrive

import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.ImageButton
import android.widget.TextView
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.progressindicator.CircularProgressIndicator
import com.zoho.catalyst.common.ZCatalystUtil
import com.zoho.catalyst.datastore.Column
import com.zoho.catalyst.datastore.ZCatalystSelectQuery
import com.zoho.catalyst.setup.ZCatalystApp
import java.io.File
import java.text.SimpleDateFormat
import java.util.*


class HomeActivity : AppCompatActivity() {


    private companion object {

        private var totalFiles: Int = 0
        private var isGrid: Boolean = true

        @RequiresApi(Build.VERSION_CODES.O)
        private val dbDateTimeFormatter =
            SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH)
        private val displayDateTimeFormatter =
            SimpleDateFormat("dd MMM yyyy HH:mm", Locale.ENGLISH)
        private var user_id = ""
        private var fileItems: ArrayList<FileItem> = ArrayList()
    }


    private val filePricker = registerForActivityResult(
        ActivityResultContracts.OpenDocument()
    ) { uri ->
        if (uri != null) {
            val uploadDialog = UploadDialog(uri = uri, mContext = this)
            uploadDialog.show(supportFragmentManager, "Upload Dialog")

        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        loadHomePage()

    }


    fun addFileItem(fileItem: FileItem) {

        fileItems.add(0, fileItem)
        totalFiles += 1
        setTotalFiles()
        setValuesToRecycler()
    }


    @RequiresApi(Build.VERSION_CODES.O)
    private fun loadHomePage() {
        setContentView(layoutInflater.inflate(R.layout.home, null))
        val layoutChanger: ImageButton = findViewById(R.id.home_layout_changer)
        layoutChanger.setOnClickListener {
            isGrid = !isGrid
            if (isGrid) {
                layoutChanger.setImageResource(R.drawable.list_view)
            } else {
                layoutChanger.setImageResource(R.drawable.grid_view)
            }
            changeLayout()
        }
        val fab = findViewById<FloatingActionButton>(R.id.fab)

        fab.setOnClickListener {
            filePricker.launch(
                arrayOf(
                    "application/pdf",
                    "text/plain",
                    "image/png",
                    "image/jpeg",
                    "application/msword",
                    "application/vnd.ms-powerpoint",
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                )
            )
        }
        if (ZCatalystApp.getInstance().isUserSignedIn()) {
            if (user_id.isEmpty()) {
                ZCatalystApp.getInstance().getCurrentUser({ user ->
                    user_id = user.id.toString()
                    initialize()
                }, {
                    Toast.makeText(
                        applicationContext,
                        "Unable to fetch the current user",
                        Toast.LENGTH_LONG
                    ).show()
                })
            } else {
                initialize()
            }
        } else {
            Toast.makeText(
                applicationContext,
                "Session Expired , logout and login again",
                Toast.LENGTH_LONG
            ).show()
        }
    }


    private fun changeLayout() {
        val recyclerView: RecyclerView = findViewById(R.id.recyclerView)
        if (isGrid) {
            val recyclerAdapter = GridViewAdapter(fileItems, this)
            recyclerView.adapter = recyclerAdapter
            recyclerView.layoutManager = GridLayoutManager(this, 2)
        } else {
            val recyclerAdapter = LinearViewAdapter(fileItems, this)
            recyclerView.adapter = recyclerAdapter
            recyclerView.layoutManager = LinearLayoutManager(this)
        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun initialize() {
        fileItems.clear()
        loadNoOfFiles()
        loadData(1, true)

    }

    @RequiresApi(Build.VERSION_CODES.O)
    private fun loadNoOfFiles() {
        val columns = setOf(
            Column("COUNT(ROWID)"),
        )
        val query = ZCatalystSelectQuery.Builder().select(columns = columns).from("Files")
            .where("CREATORID", ZCatalystUtil.Comparator.EQUAL_TO, user_id).build()
        ZCatalystApp.getInstance().getDataStoreInstance().execute(query, { data ->
            var tempTotalFiles:Int = data[0]["Files"]?.get("ROWID").toString().toDouble().toInt()
            totalFiles = tempTotalFiles
            setTotalFiles()
            tempTotalFiles -= 200

            if (tempTotalFiles > 0) {
                val totalQueryFetch = tempTotalFiles / 200
                for (i in 1..totalQueryFetch) {
                    loadData(((i - 1) * 200) + 201, false)
                }
            }
        }, {
            Log.i("Done", "Error")
        })
    }

    private fun setValuesToRecycler() {
        val recyclerView: RecyclerView = findViewById(R.id.recyclerView)
        val processBar: CircularProgressIndicator = findViewById(R.id.home_progress)
        val noFiles: TextView = findViewById(R.id.home_no_files)
        if (processBar.visibility == View.VISIBLE) {
            processBar.visibility = View.GONE
        }
        if (fileItems.isEmpty()) {

            if (noFiles.visibility == View.GONE) {
                noFiles.visibility = View.VISIBLE
            }

        } else {
            if (noFiles.visibility == View.VISIBLE) {
                noFiles.visibility = View.GONE
            }
            if (isGrid) {
                val recyclerAdapter = GridViewAdapter(fileItems, this)
                recyclerView.adapter = recyclerAdapter
                recyclerView.layoutManager = GridLayoutManager(this, 2)
            } else {
                val recyclerAdapter = LinearViewAdapter(fileItems, this)
                recyclerView.adapter = recyclerAdapter
                recyclerView.layoutManager = LinearLayoutManager(this)
            }
        }


    }

    @RequiresApi(Build.VERSION_CODES.O)
    private fun loadData(offset: Int?, needToCallInit: Boolean) {
        val columns = setOf(
            Column("ROWID"),
            Column("file_id"),
            Column("file_name"),
            Column("uploaded_time"),
            Column("file_type")
        )
        val query = ZCatalystSelectQuery.Builder().select(columns = columns).from("Files")
            .where("CREATORID", ZCatalystUtil.Comparator.EQUAL_TO, user_id).limit(offset!!, 200)
            .build()
        ZCatalystApp.getInstance().getDataStoreInstance().execute(query, success = { data ->


            for (file in data) {
                val fileDbData = file["Files"]
                if (fileDbData != null) {
                    val fileItem = FileItem(
                        file_name = fileDbData["file_name"].toString(),
                        file_id = fileDbData["file_id"].toString().toLong(),
                        row_id = fileDbData["ROWID"].toString().toLong(),
                        created_time = displayDateTimeFormatter.format(
                            dbDateTimeFormatter.parse(
                                fileDbData["uploaded_time"].toString()
                            )
                        ),
                        file_type = fileDbData["file_type"].toString()
                    )
                    fileItems.add(fileItem)
                }
            }

            if (needToCallInit) {
                setValuesToRecycler()
            }
        })
    }

    override fun onDestroy() {
        super.onDestroy()
        val outputDir = "$cacheDir/tmp"
        val folder = File(outputDir)
        if (folder.isDirectory) {
            val children: Array<String>? = folder.list()
            if (children != null) {
                for (i in children.indices) {
                    File(folder, children[i]).delete()
                }
            }
            folder.delete()
        }
    }

    fun deleteFile(fileId: Long) {
        val temp: List<FileItem> = fileItems.filter { item -> item.file_id != fileId }
        fileItems.clear()
        fileItems.addAll(temp)
        totalFiles -= 1
        setValuesToRecycler()
        setTotalFiles()
    }

    private fun setTotalFiles() {
        val homeTitle: TextView = findViewById(R.id.home_title)
        homeTitle.text = "Files ($totalFiles)"
    }


    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.logout -> {
                logout()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun logout() {
        ZCatalystApp.getInstance().logout({
            Log.i("Logout", "Success")
            loadLanding()
        }, {
            Log.i("Logout", "Failed")
            loadLanding()
        })
    }

    private fun loadLanding() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        this.finish()
    }
}