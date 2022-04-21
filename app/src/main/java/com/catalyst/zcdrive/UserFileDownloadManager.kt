package com.catalyst.zcdrive


import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.pm.PackageManager
import android.os.Build
import android.os.Environment
import android.widget.Toast
import androidx.core.app.ActivityCompat
import com.zoho.catalyst.setup.ZCatalystApp
import java.io.File
import java.io.FileOutputStream


class UserFileDownloadManager(private val mContext: Context?, private val fileItem: FileItem?) :
    ActivityCompat.OnRequestPermissionsResultCallback {
    private val storageRequestCode: Int = 1034
    private val folderId: Long = 3376000001225603
    fun checkPermissionDownload() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (ActivityCompat.checkSelfPermission(
                    mContext as Activity,
                    Manifest.permission.WRITE_EXTERNAL_STORAGE
                ) == PackageManager.PERMISSION_DENIED
            ) {
                ActivityCompat.requestPermissions(
                    mContext,
                    arrayOf(Manifest.permission.WRITE_EXTERNAL_STORAGE),
                    storageRequestCode
                )
            } else {
                downloadFile()
            }
        } else {
            downloadFile()
        }
    }


    private fun downloadFile() {
        val app = ZCatalystApp.getInstance()
        val path = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
            .toString() + "/" + "ZCDrive"
        if (app.isUserSignedIn()) {
            app.getFileStoreInstance().getFolderInstance(folderId).getFile(fileItem?.file_id!!, {
                it.download({ fileContent ->
                    val folder = File(path)
                    if (!folder.exists()) {
                        folder.mkdir()
                    }
                    var num = 1
                    var file = File(path + "/" + fileItem.file_name)
                    var newPath = ""
                    val fileName = fileItem.file_name.substring(
                        0,
                        fileItem.file_name.indexOf('.')
                    )
                    while (file.exists()) {
                        newPath = "$path/$fileName($num).${fileItem.file_type}"
                        file = File(newPath)
                        num += 1
                    }
                    if (file.createNewFile()) {
                        val fileOutputStream = FileOutputStream(file)
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
                        Toast.makeText(
                            mContext,
                            "Download Completed you can view the file in Download/ZCDrive",
                            Toast.LENGTH_LONG
                        ).show()
                    } else {
                        Toast.makeText(mContext, "Unable to download the file", Toast.LENGTH_SHORT)
                            .show()
                    }
                }, {
                    Toast.makeText(mContext, "Unable to download the file", Toast.LENGTH_SHORT)
                        .show()
                })
            }, {
                Toast.makeText(mContext, "Unable to download the file", Toast.LENGTH_SHORT).show()
            })
        } else {
            Toast.makeText(mContext, "Session expired , logout and login again", Toast.LENGTH_SHORT)
                .show()
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
                    downloadFile()
                } else {
                    Toast.makeText(mContext, "Permission Denied", Toast.LENGTH_SHORT).show()
                }
            }
            else -> {
                Toast.makeText(mContext, "Permission Denied", Toast.LENGTH_SHORT).show()
            }
        }
    }
}