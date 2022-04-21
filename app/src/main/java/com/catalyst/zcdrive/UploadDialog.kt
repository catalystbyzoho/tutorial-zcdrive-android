package com.catalyst.zcdrive

import android.app.AlertDialog
import android.app.Dialog
import android.content.Context
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.fragment.app.DialogFragment
import com.zoho.catalyst.setup.ZCatalystApp
import java.text.DateFormat
import java.text.SimpleDateFormat
import java.time.LocalDateTime
import java.util.*

class UploadDialog(private val uri: Uri, private val mContext: Context) : DialogFragment() {
    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val folderId = 3376000001225603
        val dbDateTimeFormatter = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH)
        val inputDateTimeFormatter: DateFormat =
            SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS", Locale.US)
        val displayDateTimeFormatter = SimpleDateFormat("dd MMM yyyy HH:mm", Locale.ENGLISH)

        return activity?.let {
            val builder = AlertDialog.Builder(it)
            builder.setTitle("Upload")
            builder.setMessage("Are you sure you want upload the file ?")
            builder.setPositiveButton("Yes") { _, _ ->
                if (ZCatalystApp.getInstance().isUserSignedIn()) {
                    Toast.makeText(context,"Please wait",Toast.LENGTH_SHORT).show()
                    ZCatalystApp.getInstance().getFileStoreInstance().getFolderInstance(folderId)
                        .uploadFile(uri = uri, { fileObject ->
                            val localDate = LocalDateTime.now()
                            val row =
                                ZCatalystApp.getInstance().getDataStoreInstance()
                                    .getTableInstance("Files")
                                    .newRow()
                            row.setColumnValue("file_name", fileObject.name)
                            row.setColumnValue("file_id", fileObject.id)
                            row.setColumnValue(
                                "uploaded_time", dbDateTimeFormatter.format(
                                    inputDateTimeFormatter.parse(localDate.toString())
                                )
                            )
                            row.setColumnValue(
                                "file_type",
                                fileObject.name.substring(
                                    fileObject.name.indexOf('.') + 1,
                                    fileObject.name.length
                                )
                            )
                            row.create({ rowObject ->
                                Toast.makeText(
                                    mContext,
                                    "Uploaded Successfully",
                                    Toast.LENGTH_SHORT
                                ).show()
                                val fileItem = FileItem(
                                    file_type = rowObject.getString("file_type").toString(),
                                    file_name = rowObject.getString("file_name").toString(),
                                    row_id = rowObject.id,
                                    file_id = fileObject.id,
                                    created_time = displayDateTimeFormatter.format(
                                        dbDateTimeFormatter.parse(
                                            rowObject.getString("uploaded_time").toString()
                                        )
                                    ),
                                )
                                if(mContext is HomeActivity){
                                    (mContext).addFileItem(fileItem)
                                }

                            }, {
                                ZCatalystApp.getInstance().getFileStoreInstance()
                                    .getFolderInstance(folderId).getFile(fileObject.id, { file ->
                                        file.delete({
                                            // file uploaded but not added to table
                                            Toast.makeText(
                                                mContext,
                                                "Upload Failed",
                                                Toast.LENGTH_SHORT
                                            ).show()
                                        }, {
                                            //Unable to delete file
                                            Toast.makeText(
                                                mContext,
                                                "Upload Failed",
                                                Toast.LENGTH_SHORT
                                            ).show()
                                        })
                                    }, {
                                        //Unable to fetch file
                                        Toast.makeText(
                                            mContext,
                                            "Upload Failed",
                                            Toast.LENGTH_SHORT
                                        )
                                            .show()
                                    })
                            })
                        }, {
                            Toast.makeText(mContext, "Upload Failed", Toast.LENGTH_SHORT).show()
//
                        })

                } else {
                    Toast.makeText(
                        mContext,
                        "Session Expired , logout and login again to perform the operation",
                        Toast.LENGTH_LONG
                    ).show()
                }
            }
            builder.setNegativeButton("No") { dialog, _ ->
                dialog.dismiss()

            }
            builder.create()
        } ?: throw IllegalStateException("Activity cannot be null")
    }

}