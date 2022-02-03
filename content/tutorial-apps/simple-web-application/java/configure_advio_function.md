---
title: "Configure the Advanced I/O Function"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 4
language:
  current_language: "Java"
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

The Java function directory  ( {{%badge%}}{{%link href="https://catalyst.zoho.com/help/project-directory-structure.html#Functions"%}} functions/AlienCityAIO {{%/link%}}{{%/badge%}} ) contains the following files:

* The {{%badge%}}AlienCityAIO.java{{%/badge%}} main function file
* The {{%badge%}}catalyst-config.json{{%/badge%}} configuration file
* Java library files in the lib folder
* {{%badge%}}.classpath{{%/badge%}} and {{%badge%}}.project{{%/badge%}} dependency files


You will be adding code in the {{%badge%}}AlienCityAIO.java{{%/badge%}} main function file.

The two APIs in the Advanced I/O function that handle the routing between the server and the Data Store are:

* **{{%badge%}}GET /alien{{%/badge%}}**: To check whether aliens are present in a city
* **{{%badge%}}POST /alien{{%/badge%}}**: To report an alien presence in a city
<br>

Let's now add the code in the function file. 
<br>

Copy the code given below and paste it in {{%badge%}}AlienCityAIO.java{{%/badge%}} in the {{%badge%}}functions/AlienCityAIO{{%/badge%}} directory of your project, and save the file. You can use any IDE of your choice to work with the application's files. 
<br>

{{%note%}} {{%bold class="bold-primary"%}}Note:{{%/bold%}} Please go through the code in this section to make sure you fully understand it. {{%/note%}}

{{% panel_with_adjustment header="AlienCityAIO.java" footer="button" lang="java" scroll="set-scroll" %}}import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.catalyst.advanced.CatalystAdvancedIOHandler;
import com.zc.component.object.ZCObject;
import com.zc.component.object.ZCRowObject;
import com.zc.component.zcql.ZCQL;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class AlienCityAIO implements CatalystAdvancedIOHandler {
	private static final Logger LOGGER = Logger.getLogger(AlienCityAIO.class.getName());

	private static String TABLENAME = "AlienCity";
	private static String COLUMNNAME = "CityName";
	JSONObject responseData = new JSONObject();
	static String GET = "GET";
	static String POST = "POST";

	@Override
	@SuppressWarnings("unchecked")
	public void runner(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			//Fetches the endpoint and method to which the call was made
			String url = request.getRequestURI();
			String method = request.getMethod();

			//The GET API that checks the table for an alien encounter in that city
			if ((url.equals("/alien")) && method.equals(GET)) {
				String cityName = request.getParameter("city_name");

				//Queries the Catalyst Data Store table and checks whether a row is present for the given city
				int length = getAlienCountFromCatalystDataStore(cityName);
				if (length > 0) {
					responseData.put("message", "Uh oh! Looks like there are aliens in this city!");
					responseData.put("signal", "positive");
				} else {
					responseData.put("message", "Hurray! No alien encounters in this city yet!");
					responseData.put("signal", "negative");
				}
			}
			//The POST API that reports the alien encounter for a particular city
			else if ((url.equals("/alien")) && method.equals(POST)) {
				//Gets the request body and parses it
				ServletInputStream requestBody = request.getInputStream();
				JSONParser jsonParser = new JSONParser();
				JSONObject jsonObject = (JSONObject) jsonParser.parse(new InputStreamReader(requestBody, "UTF-8"));

				String cityName = (String) jsonObject.get("city_name");

				//Queries the Catalyst Data Store table and checks whether a row is present for the given city
				int length = getAlienCountFromCatalystDataStore(cityName);
				if (length > 0) {
					responseData.put("message",
						"Looks like you are not the first person to encounter aliens in this city! Someone has already reported an alien encounter here!");
				}

				//If the row is not present, then a new row is inserted
				else {
					ZCRowObject row = ZCRowObject.getInstance();
					row.set("CityName", cityName);
					ZCObject.getInstance().getTableInstance(TABLENAME).insertRow(row);
					responseData.put("message", "Thanks for reporting!");
				}
			} else {
				//The actions are logged. You can check the logs from Catalyst Logs.
				LOGGER.log(Level.SEVERE, "Error. Invalid Request");
				responseData.put("error", "Request Endpoint not found");
				response.setStatus(404);
			}

			//Sends the response back to the Client
			response.setContentType("application/json");
			response.getWriter().write(responseData.toString());
			response.setStatus(200);
		} catch (Exception e) {
			//The actions are logged. You can check the logs from Catalyst Logs.
			LOGGER.log(Level.SEVERE, "Exception in AlienCityAIO", e);
			responseData.put("error", "Internal server error occurred. Please try again in some time.");
			response.getWriter().write(responseData.toString());
			response.setStatus(500);
		}
	}

	/**
	 * Checks whether an alien encounter is already reported for the given city by
	 * querying the Data Store table
	 * 
	 * @param {*} catalystApp
	 * @param {*} cityName
	 */
	private int getAlienCountFromCatalystDataStore(String cityName) throws Exception {

		String query = "select * from " + TABLENAME + " where " + COLUMNNAME + " = " + cityName;

		//Gets the ZCQL instance and executes query using the query string
		ArrayList<ZCRowObject> rowList = ZCQL.getInstance().executeQuery(query);
		return rowList.size();
	}
}
{{% /panel_with_adjustment %}}

The functions directory is now configured. We will discuss the architecture of the function and the client in the next section. 
