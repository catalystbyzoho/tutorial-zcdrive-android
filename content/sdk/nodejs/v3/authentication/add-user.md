---
title: "Add New User"
description: "Node.js SDK Authentication"
tags : [ "Description", "Common operations", "Instance methods" ]
type: "sdk"
layout: "single"
linkTitle : "nodejsv3"
weight: 2
version:
  current_version: "v3"
  version_item:
    - name : "v1"
      url: "/sdk/nodejs/v1/authentication/add-user/"
    - name : "v2"
      url: "/sdk/nodejs/v2/authentication/add-user/"
    - name : "v3"
      url: "/sdk/nodejs/v3/authentication/add-user/"
---

# Add a New User

You can add {{%link href="https://catalyst.zoho.com/help/users.html"%}}end users{{%/link%}} to your Catalyst serverless applications, fetch their details, or manage their accounts easily. When a user has signed up to a Catalyst application, unique identification values like ZUID and User ID are created for them. The user is also assigned to an organization automatically in this method.

## Create a JSON Configuration

Before you add a new end-user to your Catalyst application, you must create a JSON object that contains the registration details of a particular user, such as their email address, last name, the application platform and the role they must be added to, as shown below. You can then pass the configuration to the user registration method.

{{%note%}} {{%bold class="bold-primary" %}}Note:{{%/bold%}} 

* You must provide the values for {{%badge%}}email_id{{%/badge%}} and {{%badge%}}last_name{{%/badge%}} to register a user mandatorily.
* You can obtain the {{%badge%}}role_id{{%/badge%}} from the *Roles* section in *Authentication* in the Catalyst console.
* You can obtain the ZAID from the {{%link href="https://catalyst.zoho.com/help/environments-settings.html"%}}Environment settings{{%/link%}} in your Catalyst console.

{{%/note%}}

{{% panel_without_adjustment header="JSON Configuration" %}}//Create a JSON object for adding a new user
var signupConfig = {
			platform_type: 'web',
			zaid: 10020507508
	         };
var userConfig = {
			last_name: 'Boyle',
			email_id: 'p.boyle@zylker.com',
			role_id : '3376000000159024'
		};
{{% /panel_without_adjustment %}}


## Add a New User

You can now add a new end-user to your Catalyst application using the code below. You must pass the JSON objects you created in the previous section as arguments to the {{%badge%}}registerUser(){{%/badge%}} method.

The {{%badge%}}registerUser(){{%/badge%}} method handles the user sign-up process and returns a promise. This promise will be resolved to a JSON object.

The {{%badge%}}userManagement{{%/badge%}} reference used below is defined in the {{%link href="https://catalyst.zoho.com/sdk/nodejs/v1/authentication/component-instance/"%}}component instance page{{%/link%}}.


{{%note%}} {{%bold class="bold-primary" %}}Note:{{%/bold%}} You will be able to add only 25 users in your application in the {{%link href="https://catalyst.zoho.com/help/environments.html"%}}development environment{{%/link%}}. After you deploy your application to production, you can include any number of end-users in it.{{%/note%}}

{{% panel_without_adjustment header="Add User" %}}let userManagement = app.userManagement();
let registerPromise = userManagement.registerUser(signupConfig, userConfig); //Pass the JSON configration to the method
registerPromise.then(userDetails => {  //Returns a promise
        console.log(userDetails); 
});
{{% /panel_without_adjustment %}}

A sample response that you will receive for each version is shown below:

{{%panel_with_select header="Node.js" scroll="set-scroll" %}}
{{%divtag id="V2"%}}
    {
        zaid: "1005634498",
        user_details: {
        zuid: "1005641290",
        zaaid: "1005641456",
        org_id: "1005641456",
        status: "ACTIVE",
        is_confirmed: false,
        email_id: "p.boylie@zylker.com",
        last_name: "Boyle",
        created_time: "Aug 12, 2021 12:33 PM",
        modified_time: "Aug 12, 2021 12:33 PM",
        invited_time: "Aug 12, 2021 12:33 PM",
        role_details: { role_name: "App User", role_id: "2305000000006024" },   
        user_type: "App User",
        user_id: "2305000000007752",
        project_profiles: []
        },
    redirect_url: "https://aliencity-66446133.development.catalystserverless.com/app/",
    platform_type: "web",
    org_id: null
    }
{{%/divtag %}} 
{{%divtag id="V1"%}}
    {
  zaid: 1005634498,
  user_details: {
    zuid: 1005641433,
    zaaid: 1005641434,
    org_id: 1005641434,
    status: "ACTIVE",
    is_confirmed: false,
    email_id: "p.boyle@zylker.com",
    last_name: "Boyle",
    created_time: "Aug 12, 2021 12:27 PM",
    modified_time: "Aug 12, 2021 12:27 PM",
    invited_time: "Aug 12, 2021 12:27 PM",
  role_details: { role_name: "App User", role_id: 2305000000006024 },
    user_type: "App User",
    user_id: 2305000000007745,
    project_profiles: []
  },
redirect_url: "https://aliencity-66446133.development.catalystserverless.com/app/",
  platform_type: "web",
  org_id: null
}
{{%/divtag%}} 
{{%/panel_with_select%}}


**API Documentation:** {{%link href="https://catalyst.zoho.com/help/api/auth/signup-user.html"%}}Add New User - API{{%/link%}}

**Java SDK:** {{%link href="https://catalyst.zoho.com/sdk/javasdk/um_reguser.html"%}}Add New User - Java SDK{{%/link%}}

**Web SDK:** {{%link href="https://catalyst.zoho.com/sdk/websdk/um_reguser.html"%}}Add New User - Web SDK{{%/link%}}