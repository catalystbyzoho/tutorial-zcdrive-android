package com.catalyst.zcdrive

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.zoho.catalyst.org.ZCatalystUser
import com.zoho.catalyst.setup.ZCatalystApp
import java.util.regex.Pattern

class Signup : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.signup)
        val loginButton: TextView = findViewById(R.id.signup_login)
        loginButton.setOnClickListener {
            initiateLogin()
        }
        val signupButton: Button = findViewById(R.id.signup_signup_btn)
        signupButton.setOnClickListener {
            registerUser()
        }
    }

    private fun initiateLogin() {
        ZCatalystApp.getInstance().login({
            val intent = Intent(this, HomeActivity::class.java)
            startActivity(intent)
            this.finish()
        }, {
            Log.i("Login", "Failed")
            Toast.makeText(applicationContext, "Login Failed", Toast.LENGTH_SHORT).show()
        })
    }

    private fun registerUser() {
        val name: EditText = findViewById(R.id.signup_name)
        val email: EditText = findViewById(R.id.signup_email)
        val ePattern =
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
        val pattern = Pattern.compile(ePattern)
        val matcher = pattern.matcher(email.text)
        if (name.text.isEmpty()) {
            Toast.makeText(applicationContext, "Name cannot be empty", Toast.LENGTH_SHORT).show()
            return
        } else if (email.text.isEmpty()) {
            Toast.makeText(applicationContext, "Email cannot be empty", Toast.LENGTH_SHORT).show()
            return
        } else if (!matcher.matches()) {
            Toast.makeText(applicationContext, "Invalid value for Email", Toast.LENGTH_SHORT).show()
            return
        } else {
            val newUser: ZCatalystUser = ZCatalystApp.getInstance()
                .newUser(lastName = name.text.toString(), email = email.text.toString())
            ZCatalystApp.getInstance().signUp(newUser,
                {
                    Toast.makeText(applicationContext,"You will receive a mail in a while to set your password",Toast.LENGTH_LONG).show()
                    name.text.clear()
                    email.text.clear()
                    Handler().postDelayed(Runnable { initiateLogin() }, 5000)
                },
                { exception ->
                    Toast.makeText(applicationContext,"${exception.message}",Toast.LENGTH_LONG).show()
                })
        }
    }
}