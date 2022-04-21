package com.catalyst.zcdrive

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.zoho.catalyst.setup.ZCatalystApp
import com.zoho.catalyst.setup.ZCatalystSDKConfigs

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(layoutInflater.inflate(R.layout.landing_page, null))



        val loginButton: Button = findViewById(R.id.landing_page_login)
        val signUpButton: Button = findViewById(R.id.landing_page_signup)

        loginButton.setOnClickListener {
            initiateLogin()
        }
        signUpButton.setOnClickListener {
            initiateSignUp()
        }

        initiateLogin()


    }

    private fun initiateSignUp() {
        val intent = Intent(this, Signup::class.java)
        startActivity(intent)
        this.finish()
    }

    private fun initiateLogin() {
        ZCatalystApp.getInstance().login({
            loginSuccess()
        }, {
            Log.i("Login", "Failed")
            Toast.makeText(applicationContext, "Login Failed", Toast.LENGTH_SHORT).show()
        })
    }


    private fun loginSuccess() {
        val intent = Intent(this, HomeActivity::class.java)
        startActivity(intent)
        this.finish()
    }

}