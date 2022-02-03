---
title: "Introduction"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: -2
language:
  current_language: "NodeJS"
  language_item:
    - name : "Java"
      url: "/tutorial-apps/simple-web-application/java/introduction"
    - name : "NodeJS"
      url: "/tutorial-apps/simple-web-application/nodejs/introduction"
component_involved:
  enable : true
  duration: "40 mins"
  difficulty_level: "Intermediate"
  component_item:
    - name : "Functions"
      url: "/help/functions"
    - name : "Web Client"
      url: "/help/web-client-hosting" 
    - name : "Data Store"
      url: "/help/data-store"
    - name : "ZCQL"
      url: "/help/zcql"
---


# Introduction
This tutorial will help you build a simple web application, titled Alien City, that allows you to report and look up alien encounters in a city. Alien City is built as a single-page serverless application using Catalyst. 

The client application will look like this:

{{%image src="/images/tutorials/alcity/catalyst_alcity_client.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

You can access a working application and test its functioning here: 
{{%link href="http://alien-city.zohocatalystapp.com"%}}alien-city.zohocatalystapp.com{{%/link%}}

The Alien City application contains the following fundamental Catalyst components:

* {{%link href="https://www.zoho.com/catalyst/help/functions.html"%}}**Advanced I/O Function**{{%/link%}}: The Advanced I/O function can be coded either in **Java or Node.js** platform. It contains APIs that enable the user to report or check for an alien encounter in a city

* **Web Client**: The frontend of the application that is hosted on Catalyst through {{%link href="https://www.zoho.com/catalyst/help/web-client-hosting.html"%}}web client hosting{{%/link%}}


The application uses the following Catalyst features:

* {{%link href="https://www.zoho.com/catalyst/help/data-store.html"%}}**Data Store**{{%/link%}}: To store the database of the cities where alien encounters have been reported

* {{%link href="https://www.zoho.com/catalyst/help/zcql.html"%}}**ZCQL**{{%/link%}}: To fetch data from the Data Store through querying

We will use the Catalyst web console and the Catalyst Command Line Interface (CLI) to build this application. 

You will be given the code for the files to be included in the function and client components in this tutorial. You will just have to copy the code given here and paste it into the appropriate files as directed. 

#### Application Architecture

The Alien City application's functioning can be described as follows:

* **Reporting an alien encounter**
\
A user enters the name of a city where they experienced an alien encounter. If the city had already been reported previously, the client displays a message notifying the user of it. If the city has never been reported, the data will be added to a table in the Data Store identifying the city.

* **Checking for an alien encounter**
\
A user checks for a record of an alien encounter in a particular city by providing its name. If a record of that city exists in the Data Store, the client will display a positive response. Otherwise, it will display a negative response.

{{%image src="/images/tutorials/alcity/catalyst_alcity_architecture.jpg" class="w70" alt="delete-table" %}}{{%/image%}}

