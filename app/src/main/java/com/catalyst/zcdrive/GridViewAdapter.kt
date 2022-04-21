package com.catalyst.zcdrive

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageButton
import android.widget.ImageView
import android.widget.PopupMenu
import android.widget.TextView
import androidx.fragment.app.FragmentActivity
import androidx.recyclerview.widget.RecyclerView

class GridViewAdapter(
    private val dataSet: ArrayList<FileItem>,
    private val mContext: Context
) : RecyclerView.Adapter<GridViewAdapter.ViewHolder>() {
    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val fileName: TextView = view.findViewById(R.id.file_item_grid_file_name)
        val menuButton: ImageButton = view.findViewById(R.id.file_item_grid_menu_button)
        val previewImage: ImageView = view.findViewById(R.id.file_item_grid_file_type)
    }


    override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(viewGroup.context)
            .inflate(R.layout.file_item_grid, viewGroup, false)

        return ViewHolder(view)
    }


    override fun onBindViewHolder(viewHolder: ViewHolder, position: Int) {
        viewHolder.fileName.text = dataSet[position].file_name


        when (dataSet[position].file_type.lowercase()) {
            "pdf" -> viewHolder.previewImage.setImageResource(R.drawable.pdf)
            "ppt" -> viewHolder.previewImage.setImageResource(R.drawable.ppt)
            "pptx" -> viewHolder.previewImage.setImageResource(R.drawable.ppt)
            "txt" -> viewHolder.previewImage.setImageResource(R.drawable.txt)
            "doc" -> viewHolder.previewImage.setImageResource(R.drawable.txt)
            "docx" -> viewHolder.previewImage.setImageResource(R.drawable.txt)
            else -> viewHolder.previewImage.setImageResource(R.drawable.image)
        }

        viewHolder.previewImage.setOnClickListener{
            val previewManager =
                PreviewFile(context = mContext, fileItem = dataSet[position])
            previewManager.checkPermissionPreview()
        }


        viewHolder.menuButton.setOnClickListener { childView ->
            val popupMenu: PopupMenu = PopupMenu(childView.context, childView)
            popupMenu.inflate(R.menu.file_item_popup)
            popupMenu.setOnMenuItemClickListener { menuItem ->
                return@setOnMenuItemClickListener when (menuItem.itemId) {
                    R.id.file_item_popup_delete -> {
                        val alertDialog = DeleteDialog(dataSet[position],mContext)
                        alertDialog.show((viewHolder.itemView.context as FragmentActivity).supportFragmentManager,"Delete Dialog")
                        true
                    }
                    R.id.file_item_popup_download -> {
                        val downloadManager = UserFileDownloadManager(mContext,dataSet[position])
                        downloadManager.checkPermissionDownload()
                        true
                    }
                    R.id.file_item_popup_view->{
                        val previewManager = PreviewFile(context = mContext,fileItem = dataSet[position])
                        previewManager.checkPermissionPreview()
                        true
                    }

                    else -> {
                        true
                    }

                }
            }
            popupMenu.show()
        }
    }

    override fun getItemCount() = dataSet.size

}