package com.catalyst.zcdrive

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.util.Log
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.FileProvider
import com.zoho.catalyst.setup.ZCatalystApp
import com.zoho.zanalytics.ZAnalytics
import java.io.File
import java.io.FileOutputStream

class PreviewFile(private val fileItem: FileItem?, private val context: Context): ActivityCompat.OnRequestPermissionsResultCallback  {
    private val folderId: Long = 3376000001225603
    private val storageRequestCode: Int = 1034
    private val mimeTypes = hashMapOf(
        "png" to "image/png",
        "pdf" to "application/pdf",
        "jpeg" to "image/jpeg",
        "jpg" to "image/jpeg",
        "doc" to "application/msword",
        "ppt" to "application/vnd.ms-powerpoint",
        "pptx" to "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "docx" to "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )

    fun checkPermissionPreview() {
        Toast.makeText(context,"Please wait",Toast.LENGTH_SHORT).show()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (ActivityCompat.checkSelfPermission(
                    context as Activity,
                    Manifest.permission.WRITE_EXTERNAL_STORAGE
                ) == PackageManager.PERMISSION_DENIED
            ) {
                ActivityCompat.requestPermissions(
                    context,
                    arrayOf(Manifest.permission.WRITE_EXTERNAL_STORAGE),
                    storageRequestCode
                )
            } else {
                previewFile()
            }
        } else {
            previewFile()
        }
    }

    private fun previewFile() {
        val app = ZCatalystApp.getInstance()
        if (app.isUserSignedIn()) {
            app.getFileStoreInstance().getFolderInstance(folderId).getFile(fileItem?.file_id!!, {
                it.download({ fileContent ->
                    val outputDir = context.cacheDir.toString() +"/tmp"
                    val folder = File(outputDir)
                    if(!folder.exists()){
                        folder.mkdir()
                    }
                    val previewFile = File(outputDir+"/${fileItem.file_name}")
                    val fileOutputStream = FileOutputStream(previewFile)
                    val buffer = ByteArray(1024)
                    var len: Int
                    while (true) {
                        len = fileContent.read(buffer)
                        if (len <= 0) {
                            break
                        }
                        fileOutputStream.write(buffer, 0, len)
                    }
                    fileOutputStream.close()
                    fileContent.close()

                    var uri = Uri.fromFile(previewFile)
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                        uri = FileProvider.getUriForFile(context,BuildConfig.APPLICATION_ID+".provider",previewFile)
                    }
                    try {
                        val viewIndent = Intent(Intent.ACTION_VIEW)
                        viewIndent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                        viewIndent.setDataAndType(uri, mimeTypes[fileItem.file_type])
                        (context as Activity).startActivity(viewIndent)
                    } catch (e: Exception) {
                        Toast.makeText(context,"No app found to open this document",Toast.LENGTH_LONG).show()
                    }

                },{
                    Toast.makeText(context,"Unable to preview the file",Toast.LENGTH_LONG).show()
                })
            },{
                Toast.makeText(context,"Unable to preview the file",Toast.LENGTH_LONG).show()
            })
        }else
        {
            Toast.makeText(context,"Session Expired, logout and login to perform any action",Toast.LENGTH_LONG).show()
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        when (requestCode) {
            storageRequestCode -> {
                if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    previewFile()
                } else {
                    Toast.makeText(context, "Permission Denied", Toast.LENGTH_SHORT).show()
                }
            }
            else -> {
                Toast.makeText(context, "Permission Denied", Toast.LENGTH_SHORT).show()
            }
        }
    }
}