---
title: "Deploy the project"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 7
is_last: true
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
    - name : "Deploy CLI Resources"
      url: "/help/cli-deploy"
    - name : "Web Client Hosting"
      url: "/help/web-client-hosting"
---


# Deploy the project


To {{%link href="https://www.zoho.com/catalyst/help/cli-deploy.html"%}}deploy your Catalyst project{{%/link%}} from the CLI, run the following command in your terminal from your project directory (CATALYST_PROJECT_HOME):

{{%cli lang="javascript" class="cli"%}}catalyst deploy{{%/cli%}}

The function is deployed first, followed by the client component. The production URLs of the components are displayed. 

{{%image src="/images/tutorials/alcity/catalyst_alcity_deploy.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

You can now open the client component's URL in a browser to access the deployed application. Alien City can be accessed now from its {{%link href="https://www.zoho.com/catalyst/help/web-client-hosting.html#Implementation"%}}web app URL{{%/link%}}. 
{{%image src="/images/tutorials/alcity/catalyst_alcity_client.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}
