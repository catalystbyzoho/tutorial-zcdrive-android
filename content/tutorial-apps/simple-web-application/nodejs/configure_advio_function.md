---
title: "Configure the Advanced I/O Function"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 4
language:
  current_language: "NodeJS"
  language_item:
    - name : "Java"
      url: "/tutorial-apps/simple-web-application/java/introduction"
    - name : "NodeJS"
      url: "/tutorial-apps/simple-web-application/nodejs/introduction"
related_link:
  enable : true
  related_link_item:
    - name : "Functions"
      url: "/help/functions"
    - name : "Advanced I/O Functions"
      url: "/help/help/advancedio-functions.html"
    - name : "Functions Directory Structure"
      url: "/help/project-directory-structure#Functions"
---


# Configure the Advanced I/O Function

Let's begin coding the Alien City application by configuring the function component. 

The Node.js function directory ( {{%badge%}}{{%link href="https://catalyst.zoho.com/help/project-directory-structure.html#Functions"%}} functions/alien_city_function {{%/link%}}{{%/badge%}} ) contains the following files: 
* The {{%badge%}}index.js{{%/badge%}} main function file
* The {{%badge%}}catalyst-config.json{{%/badge%}} configuration file
* Node modules
* {{%badge%}}{{%link href="https://docs.npmjs.com/files/package.json"%}}package.json{{%/link%}}{{%/badge%}} and {{%badge%}}{{%link href="https://docs.npmjs.com/configuring-npm/package-lock-json.html"%}}package-lock.json{{%/link%}}{{%/badge%}} dependency files


You will be adding code in the {{%badge%}}index.js{{%/badge%}} main function file.

The two APIs in the Advanced I/O function that handle the routing between the server and the Data Store are:

* **{{%badge%}}GET /alien{{%/badge%}}**: To check whether aliens are present in a city
* **{{%badge%}}POST /alien{{%/badge%}}**: To report an alien presence in a city



<br>

#### Install Express Node.js Framework 

For the Node.js function, you will be using the {{%link href="https://expressjs.com/"%}}Express Node.js framework{{%/link%}}. To import the Express package in the code, you must install the Express dependencies in your system.

To install {{%badge%}}Express.js{{%/badge%}} in your local machine, navigate to the Node function's directory ({{%badge%}}functions/alien_city_function{{%/badge%}}) in your terminal and execute the following command:

{{%cli lang="javascript" %}}npm install express --save{{%/cli%}}

This will install the Express module and save the dependencies. 

{{%image src="/images/tutorials/alcity/catalyst_alcity_install_express.jpg" class="w90" alt="alien-city-client" %}}{{%/image%}}

This information will also be updated in the package.json file.

{{%image src="/images/tutorials/alcity/catalyst_alcity_package_json.jpg" class="w40" alt="alien-city-client" %}}{{%/image%}}

Let's now add the code in the function file. 

<br>
Copy the code given below and paste it in the {{%badge%}}index.js{{%/badge%}} in the {{%badge%}}functions/alien_city_function{{%/badge%}} directory of your project, and save the file. You can use any IDE of your choice to work with the application's files. 
<br>
<br>

{{%note%}}{{%bold class="bold-primary"%}}Note:{{%/bold%}} Please go through the code in this section to make sure you fully understand it. {{%/note%}}


{{% panel_with_adjustment header="index.js" footer="button" scroll="set-scroll" lang="javascript" %}}'use strict';
  var express = require('express');
  var app = express();
  var catalyst = require('zcatalyst-sdk-node');
  app.use(express.json());
  const tableName = 'AlienCity'; // The table created in the Data Store
  const columnName = 'CityName'; // The column created in the table

// The POST API that reports the alien encounter for a particular city
app.post('/alien', (req, res) => {
 var cityJson = req.body;
console.log(cityJson);
 // Initializing Catalyst SDK
 var catalystApp = catalyst.initialize(req);
 // Queries the Catalyst Data Store table and checks whether a row is present for the given city
 getDataFromCatalystDataStore(catalystApp, cityJson.city_name).then(cityDetails => {
  if (cityDetails.length == 0) { // If the row is not present, then a new row is inserted
   console.log("Alien alert!"); //Written to the logs. You can view this log from Logs under the Monitor section in the console
   var rowData={}
   rowData[columnName]=cityJson.city_name;

  var rowArr=[];
  rowArr.push(rowData);
   // Inserts the city name as a row in the Catalyst Data Store table
   catalystApp.datastore().table(tableName).insertRows(rowArr).then(cityInsertResp => {
    res.send({
     "message": "Thanks for reporting!"
    });
   }).catch(err => {
    console.log(err);
    sendErrorResponse(res);
   })
  } else { // If the row is present, then a message is sent indicating duplication
   res.send({
    "message": "Looks like you are not the first person to encounter aliens in this city! Someone has already reported an alien encounter here!"
   });
  }
 }).catch(err => {
  console.log(err);
  sendErrorResponse(res);
 })
});

// The GET API that checks the table for an alien encounter in that city 
app.get('/alien', (req, res) => {
 var city = req.query.city_name;

 // Initializing Catalyst SDK
 var catalystApp = catalyst.initialize(req);

 // Queries the Catalyst Data Store table and checks whether a row is present for the given city
 getDataFromCatalystDataStore(catalystApp, city).then(cityDetails => {
  if (cityDetails.length == 0) {
   res.send({
    "message": "Hurray! No alien encounters in this city yet!",
    "signal": "negative"
   });
  } else {
   res.send({
    "message": "Uh oh! Looks like there are aliens in this city!",
    "signal": "positive"
   });
  }
 }).catch(err => {
  console.log(err);
  sendErrorResponse(res);
 })
});
/**
 * Checks whether an alien encounter is already reported for the given city by querying the Data Store table
 * @param {*} catalystApp 
 * @param {*} cityName 
 */
function getDataFromCatalystDataStore(catalystApp, cityName) {
 return new Promise((resolve, reject) => {
  // Queries the Catalyst Data Store table
  catalystApp.zcql().executeZCQLQuery("Select * from "+tableName+" where "+columnName+"='" + cityName + "'").then(queryResponse => {
   resolve(queryResponse);
  }).catch(err => {
   reject(err);
  })
 });

}

/**
 * Sends an error response
 * @param {*} res 
 */
function sendErrorResponse(res) {
 res.status(500);
 res.send({
  "error": "Internal server error occurred. Please try again in some time."
 });
}
module.exports = app;
{{% /panel_with_adjustment %}}

The functions directory is now configured. We will discuss the architecture of the function and the client in the next section. 
