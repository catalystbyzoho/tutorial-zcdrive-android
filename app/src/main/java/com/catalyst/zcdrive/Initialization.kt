package com.catalyst.zcdrive

import android.app.Application
import com.zoho.catalyst.setup.ZCatalystApp
import com.zoho.catalyst.setup.ZCatalystSDKConfigs

class Initialization:Application() {
    override fun onCreate() {
        super.onCreate()
        ZCatalystApp.init(
            context = applicationContext,
            accountType = ZCatalystSDKConfigs.AccountType.DEVELOPMENT
        )

    }
}