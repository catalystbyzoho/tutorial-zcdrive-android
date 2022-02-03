---
title: "Test the application"
description: "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 6
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
    - name : "Serve CLI Resources"
      url: "/help/cli-serve"
---

# Test the application

Before you deploy the application to the remote console, you can {{%link href="https://www.zoho.com/catalyst/help/cli-serve.html"%}}test the application{{%/link%}} on a local server and check if everything works fine using the Catalyst CLI.

To serve the Catalyst project locally, execute the following command from your project directory (CATALYST_PROJECT_HOME):
{{%cli lang="javascript" class="cli"%}}catalyst serve{{%/cli%}}


This Alien City application is now served at default port 3000. The local endpoint URLs of the components are displayed. 

{{%note%}}{{%bold class="bold-primary"%}}Note:{{%/bold%}} Every time you access the homepage or any of the sub-pages of your client, or the function, the CLI will display a live log of the URL accessed, along with the HTTP  request method.{{%/note%}}

{{%image src="/images/tutorials/alcity/catalyst_alcity_serve.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

You can now open the client component's local URL in a browser to access the Alien City application. 
{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_1.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

Let's test the application by entering a city's name and checking for the history of an alien encounter in the city. Since we have not reported an alien encounter in a city yet, the result should be negative. 

Enter a city name in the text box and click **Check**.

{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_2.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

Since a matching record for this city is not found in the Data Store, the client displays a negative response. 
{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_3.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

Let's now report an alien encounter. Click the **Report Alien Encounter** tab. Enter a city name and click **Report**. We have entered "Madrid" in our application.
{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_4.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

The application will display a pop-up box confirming that the data is added to the Data Store.
{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_5.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

You can verify this by opening your Catalyst console and navigating to **Data Store** under *Develop*. Click the **Data View** tab to view the record that was just inserted.
{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_6.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

Let's now search for this city in the client and check if it fetches this record from the Data Store. Click **Check My City** in the client application and enter the name of the city that you just reported. Here, we enter "Madrid". Click **Check**.

{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_7.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

The client displays a positive response.

You can also check if the client displays the duplication message by reporting the same city again.
{{%image src="/images/tutorials/alcity/catalyst_alcity_test_client_8.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

If this setup is working correctly, we can deploy the application to production.