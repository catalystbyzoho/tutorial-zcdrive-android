package com.catalyst.zcdrive

import android.app.AlertDialog
import android.app.Dialog
import android.content.Context
import android.os.Build
import android.os.Bundle
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.fragment.app.DialogFragment
import com.catalyst.zcdrive.FileItem
import com.catalyst.zcdrive.HomeActivity
import com.zoho.catalyst.setup.ZCatalystApp

class DeleteDialog(private val fileObject: FileItem?, private val mContext: Context):DialogFragment() {
    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val folderId = 3376000001225603
        return activity?.let {
            // Use the Builder class for convenient dialog construction
            val builder = AlertDialog.Builder(it)
            builder.setTitle(R.string.delete)
            builder.setMessage("Are you sure you want to delete ${fileObject?.file_name} file ? This action cannot be undone.")
            builder.setPositiveButton("Yes") { _, _ ->
                if(ZCatalystApp.getInstance().isUserSignedIn()){
                    Toast.makeText(context,"Please wait",Toast.LENGTH_SHORT).show()
                    ZCatalystApp.getInstance().getFileStoreInstance()
                        .getFolderInstance(folderId)
                        .getFile(fileObject?.file_id!!, success = { file ->
                            file.delete({
                                ZCatalystApp.getInstance().getDataStoreInstance().getTableInstance("Files")
                                    .deleteRow(fileObject.row_id, success = {
                                        Toast.makeText(mContext,"Successfully deleted the file",Toast.LENGTH_SHORT).show()
                                        if (mContext is HomeActivity) {
                                            mContext.deleteFile(fileObject.file_id)
                                        }
                                    }, failure = {
                                        Toast.makeText(mContext,"Failed to delete the file",Toast.LENGTH_SHORT).show()
                                    })
                            }, {
                                Toast.makeText(mContext,"Failed to delete the file",Toast.LENGTH_SHORT).show()
                            })

                        }, failure = {
                            Toast.makeText(mContext,"Failed to delete the file",Toast.LENGTH_SHORT).show()
                        })
                }else{
                    Toast.makeText(mContext,"Session Expired , logout and login again",Toast.LENGTH_SHORT).show()
                }

            }
            builder.setNegativeButton("No") { dialog, _ ->
                dialog.dismiss()

            }
            builder.create()
        } ?: throw IllegalStateException("Activity cannot be null")
    }

}