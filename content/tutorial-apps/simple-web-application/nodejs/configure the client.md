---
title: "Configure the client"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 5
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
    - name : "Client Directory Structure"
      url: "/help/project-directory-structure"
    - name : "Web Client Hosting"
      url: "/help/web-client-hosting"
---

# Configure the client

Now, let's configure the client component. The {{%link href="https://catalyst.zoho.com/help/project-directory-structure.html#Client"%}}client directory{{%/link%}} contains:

* The {{%badge%}}index.html{{%/badge%}} file that contains the HTML code for the front-end application
* The {{%badge%}}main.css{{%/badge%}} file that contains the CSS code for the front-end application
* The {{%badge%}}main.js{{%/badge%}} file that contains the JavaScript code 
* The {{%badge%}}client-package.json{{%/badge%}} configuration file

<br>
We will be coding {{%badge%}}index.html{{%/badge%}} and {{%badge%}}main.js{{%/badge%}}.
<br>
<br>
{{%note%}}{{%bold class="bold-primary"%}}Note:{{%/bold%}} Please go through the code in this section to make sure you fully understand it.{{%/note%}}
<br>
Copy the code below and paste it into the respective files located in the {{%badge%}}client/directory{{%/badge%}} of your project using an IDE and save the files. 
<br>
<br>

{{% panel_with_adjustment header="index.html" footer="button" scroll="set-scroll" lang="html" %}}&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;title&gt;AlientCityAppClient&lt;/title&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;link rel="stylesheet" type="text/css" media="screen" href="main.css" /&gt;
    &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"&gt;
    &lt;script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"&gt;&lt;/script&gt;
    &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"&gt;
    &lt;/script&gt;
    &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"&gt;
    &lt;/script&gt;
    &lt;script src="main.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;br&gt;
    &lt;br&gt;
    &lt;center&gt;
        &lt;h1&gt;ALIEN CITY&lt;/h1&gt;
    &lt;/center&gt;
    &lt;div class="container"&gt;
        &lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
            &lt;li class="nav-item"&gt;
                &lt;a class="nav-link active" id="check-tab" data-toggle="tab" href="#check" role="tab"
                    aria-controls="check" aria-selected="true"&gt;Check My City&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="nav-item"&gt;
                &lt;a class="nav-link" id="report-tab" data-toggle="tab" href="#report" role="tab" aria-controls="report"
                    aria-selected="false"&gt;Report Alien Encounter&lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;div class="tab-content" id="myTabContent"&gt;
            &lt;div class="tab-pane fade show active" id="check" role="tabpanel" aria-labelledby="check-tab"&gt;
                &lt;br&gt;
                &lt;br&gt;
                &lt;form&gt;
                    &lt;div class="form-group"&gt;
                        &lt;label for="city-get-input"&gt;&lt;b&gt;Check if your city has aliens:&lt;/b&gt;&lt;/label&gt;
                        &lt;input type="text" class="form-control" id="city-get-input" aria-describedby="checkCity"
                            placeholder="Enter City Name"&gt;
                    &lt;/div&gt;
                    &lt;button type="submit" class="btn btn-primary"
                        onclick="getAlienEncounter();return false;"&gt;Check&lt;/button&gt;
                &lt;/form&gt;
                &lt;br&gt;
                &lt;br&gt;
                &lt;div id="result-container"&gt;
                    &lt;div id="result-text"&gt;
                    &lt;/div&gt;
                    &lt;br&gt;
                    &lt;div id="result-image"&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div id="loader" style="display: none;"&gt;
                        &lt;div class="spinner-border" role="status"&gt;
                            &lt;span class="sr-only"&gt;Loading...&lt;/span&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="tab-pane fade" id="report" role="tabpanel" aria-labelledby="report-tab"&gt;
                &lt;br&gt;
                &lt;br&gt;
                &lt;form&gt;
                    &lt;div class="form-group"&gt;
                        &lt;div class="city-post-input"&gt;
                            &lt;label for="exampleInputEmail1"&gt;&lt;b&gt;Enter the name of the city where you encountered an alien:&lt;/b&gt;&lt;/label&gt;
                            &lt;input type="text" class="form-control" id="city-post-input" aria-describedby="cityPost"
                                placeholder="Enter City Name"&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;button type="submit" class="btn btn-primary"
                        onclick="postAlienEncounter();return false;"&gt;Report&lt;/button&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
{{% /panel_with_adjustment %}}

{{% panel_with_adjustment header="main.js" footer="button" scroll="set-scroll" lang="javascript" %}}/* Fires an API call to the server and adds the reported city as an alien city
  */
function postAlienEncounter() {
    var city = $("#city-post-input").val();

    // Fires an Ajax call to the URL defined in the index.js function file
// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        url: "/server/alien_city_function/alien", //If your Advanced I/O function is coded in the Java environment, replace the "alien_city_function" with "AlienCityAIO"
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "city_name": city
        }),
        success: function (data) {
            alert(data.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}

/**
 * Fires an API call to the server to check whether the given city is alien city or not
 */
function getAlienEncounter() {
    showLoader();
    var positive = "https://media.giphy.com/media/Y1GYiLui9NHcxVKhdo/giphy.gif";
    var negative = "https://media.giphy.com/media/fsPcMdeXPxSP6zKxCA/giphy.gif";
    var city = $("#city-get-input").val();

  // Fires an Ajax call to the URL defined in the index.js function file
 // All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        url: "/server/alien_city_function/alien?city_name=" + city,  //If your Advanced I/O function is coded in the Java environment, replace the "alien_city_function" with "AlienCityAIO"
        type: "get",
        success: function (data) {
            console.log(data);
            $("#result-text").text("");
            $("#result-text").text(data.message);
            var imagesrc = negative;
            if (data.signal == 'positive') {
                imagesrc = positive;
            }
            $("#result-image").html("");
            $("#result-image").html("&lt;img src='" + imagesrc + "' /&gt;");
            hideLoader();
        },
        errror: function (error) {
            alert(error.message);
        }
    });
}

function showLoader()
{
    $("#result-container").hide();
    $("#loader").show();
}

function hideLoader()
{
    $("#loader").hide();
    $("#result-container").show();
}
{{% /panel_with_adjustment %}}

<br>

The client directory is now configured.

Let us quickly go through the working of the function and client components of the application:

{{%list class="bold"%}} 1. **GET operation** 
<br>
 * When you enter a city name in the client to check for a record of previous alien encounter, the {{%badge%}}onClick{{%/badge%}} event for the **Check** button in {{%badge%}}index.html{{%/badge%}} triggers the {{%badge%}}getAlienEncounter(){{%/badge%}} function defined in {{%badge%}}main.js{{%/badge%}}. 
<br>
 * This fires an Ajax call to the URL route defined in the Advanced I/O function. The {{%badge%}}GET{{%/badge%}} API defined in {{%badge%}}index.js{{%/badge%}} then invokes the {{%badge%}}getDataFromCatalystDataStore{{%/badge%}} function and passes the request query. 
<br>
 * This function searches for the data in the *AlienCity* table in the Data Store by executing a ZCQL query.
<br>
 * If a record matching the city name is found in the table, a {{%badge%}}positive{{%/badge%}} signal is sent as the response. Otherwise, a {{%badge%}}negative{{%/badge%}} signal is sent as the response. 
 <br>
 * The client then displays the message that matches the response. A GIF matching the response defined in {{%badge%}}main.js{{%/badge%}} is also displayed. 
{{%/list%}}
<br>


{{%list class="bold"%}} 2. **POST operation** 
<br>
* When you enter a city name in the client to report an alien encounter, the {{%badge%}}onClick{{%/badge%}} event for the **Report** button in {{%badge%}}index.html{{%/badge%}} triggers the {{%badge%}}postAlienEncounter(){{%/badge%}} function defined in {{%badge%}}main.js{{%/badge%}}.
<br>
 * This fires an Ajax call to the URL route defined in the Advanced I/O function. The {{%badge%}}POST{{%/badge%}} API defined in {{%badge%}}index.js{{%/badge%}} then invokes the {{%badge%}}getDataFromCatalystDataStore{{%/badge%}} function and passes a request query to check if a record with the same city name already exists.
<br>
 * This function searches for the data in the *AlienCity* table in the Data Store by executing a ZCQL query. If the record already exists, a response is sent, which enables the client to display an appropriate message to the user.
<br>
 * If there are no records for the city name, a new row is created in the *AlienCity* table for the city name entered by the user. A pop-up box is displayed in the client confirming the insertion of the record in the Data Store. An appropriate message is also pushed to the logs which can be checked from *Logs* under the *Monitor* section in the console. 
 {{%/list%}}
 
