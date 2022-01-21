---
title: "Authentication"
description: "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "cli"
layout: "single"
linkTitle : "cliv1"
weight: 1
version:
  current_version: "v1"
  version_item:
    - name : "v1"
      url: "/cli/v1/authentication/authentication/"
    - name : "v2"
      url: "/cli/v2/authentication/authentication/"
    - name : "v3"
      url: "/cli/v3/authentication/authentication/"
---

{{%announcement%}}You are using old version of SDK to get lattest version {{%span id="android"%}}{{%/span%}} {{%link href="#" target="_self" %}}click here{{%/link%}}{{%/announcement%}}

# Authentication - Android - v1

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries

{{%image src="/images/help/data-store/delete.jpg" class="w70" alt="delete-table" %}}{{%/image%}}

### Introduction

You can perform the following actions using Authentication from the remote console:

{{%list%}}1. **Add or remove the end-users of your application**{{%/list%}}
{{%list%}}2. **Add or remove the end-users of your application** <br> Add or remove the end-users of your application{{%/list%}}
{{%list class="bold"%}}3. Add or remove the end-users of your application <br>Add or remove the end-users of your application{{%/list%}}

* Add or remove the end-users of your application
* Enable or disable their user accounts in your application<br>Add or remove the end-users of your application
* Create templates for emails to invite new users to access the application
* Reset their passwords


* Access Catalyst's user sign-in code snippet that you can include in your application
* Configure {{%highlight i %}}Google and Zoho sign-in providers {{%/ highlight%}}for your *application*
* Create and manage roles to define the levels of access and permissions for users

Access Catalyst's user sign-in code snippet that you can include in your application
Configure {{%highlight i %}}Google and Zoho sign-in providers {{%/ highlight%}}for your *application*
Create and manage roles to define the levels of access and permissions for users
Authorize external domains and enable {{% highlight%}}CORS{{%/ highlight%}} and {{% highlight%}}iFrame{{%/ highlight%}} for your application in them
Authorize external domains and enable {{% badge%}}CORS{{%/ badge%}} and {{% badge%}}iFrame{{%/ badge%}} for your application in them

The document is divided into five pages to cover the five features of Catalyst Authentication: {{% bold %}}Users, Email Templates, Sign-in Method, Roles, Authorized Domains.{{%/ bold %}} Each section explains the key concepts, benefits, and implementation of each feature.

To install it manually, you must execute this command from the Node.js function’s directory using your terminal.

{{%code%}}scope=ZohoCatalyst.cache.CREATE
{{%/code%}}

If we enter the number of jobs as 2, the associated function, which returns the name object, is called two times parallelly and the input is passed to it. The output of the first iteration is generated as:

{{%code%}}{
    "project_details": {
    "id": 57127989012782,
    "project_name": "ShipmentTracking"
    },
    "event_bus_details": {
        "name": "Default",
        "id": 12083622901983
    },
    "data": {
        "platform_type": web,
        "user_details": {
            "email_id": "emma@zylker.com",
            "role_details": {
                "role_name": "App Admin",
                "role_id": 2817903788190
            },
            "zaaid": 1002347509,
            "created_time": "Sep 10, 2019 11:47 PM",
            "invited_time": "Sep 10, 2019 11:47 PM",
            "modified_time": "Sep 10, 2019 11:47 PM",
            "user_id": 4310838901733,
            "is_confirmed": true,
            "last_name": "Burrows",
            "first_name": "Amelia",
            "zuid": 1002342431,
            "status": "ACTIVE"
        },
        "org_id": 1002347509,
        "zaid": 10023451351,
        "redirect_url": null
    },
    "current_project": {
        "id": 579089178290,
        "project_name": "ShipmentTracking"
    },
    "action": "SignUp",
    "source": "UserManagement",
    "event_time": 1568139437092
}
{{%/code%}}

To learn about using Authentication in the development and production environments, visit the {{%link href="/help/authentication/#sdk-and-api-documentation"%}}Environments help page{{%/link%}}

### Key Concepts

Before you configure definitions in Security Rules, understand its fundamental concepts in detail.

#### Configurations Available in Security Rules

Security rules enable you to configure HTTP access and authentication for each Basic I/O and Advanced I/O function in your project, by defining values for each of those parameters in the JSON file.

The following values can be set for each parameter definition for a function:
{{% divtag table-width%}}

|  | Predicted False    | Predicted True |
| :--- | :---: | :---: |
| Actual False      | TN       | FP |
| Actual True   | FP       | TN    |

{{%/divtag%}}

#### The Default Event Listener

Every Catalyst project contains a default event listener that is created when the project is created. The behavior and functionality of the default event listener is completely different from that of a custom event listener. The default event listener is used to link a Catalyst component to a target function, and passes the component data to the function when it is invoked. 

The following table describes the list of Catalyst components and the event occurrences in them that can be associated with the default event listener:
{{%divtag%}}

| Format      | Example |
| :--- | :---: |
| YYYY-MM-DD      | 2020-01-20      |
| YYYY-MM-DD      | 2020-01-20      |
| YYYY/MM/DD hh:mm:ss      | 2020/01/20 23:54:30     |
| YYYY-MM-DDThh:mm:ss.sTZD      | 2020-01-20T05:19:31.665523 + 00:00      |

{{%/divtag%}}

{{%note%}} {{%bold class="bold-primary" %}}Note:{{%/bold%}} Specifying the platform does not prevent the user from accessing other platforms of the application. However, it defines the primary platform that the user will access from their device and sets default values for opening the application in the appropriate medium.{{%/note%}}

### SDK and API documentation

You can also add and manage the end-users of your application, and obtain user details using {{% highlight%}}Catalyst API{{%/ highlight%}} and {{% highlight%}}SDK{{%/ highlight%}}. For more information and code samples on working in these programming environments, refer to these help pages:

* [Authentication - Java SDK](/help/authentication)
* [Authentication - Node.js SDK](/help/authentication)
* [Authentication - Web SDK](/help/authentication)
* [Authentication - API](/help/authentication)
* {{%link href="/help/authentication" %}}Authentication - API{{%/link%}}


### Use Cases
Catalyst Authentication features can be used in the following scenarios:

* An internal web forum, meant for the employees of an organization to discuss and gather information about the activities and tasks undertaken in various departments, uses Catalyst Authentication to manage its users. The collaborators of the web app development team can invite users to access the forum, assign roles to users, modify user information, or delete users from the console.\
 \
 The application provides three levels of access to its various users: App admin, App Moderator, App User. The users of the user role can only submit posts in the forum, while the moderators can approve or decline the content submitted for approval, and the administrators can also permanently delete the content in the forum. These permissions for the user roles are configured in the [Data Store](#use-cases) and [File Store](/help/authentication).
* A travel planner web app requires its widget to be embedded in a hotel booking website, developed by one of its auxiliary companies. The hotel booking application also requires access to the travel web app's function endpoints, to obtain specific data of their common customers. The travel web app makes use of Catalyst Authentication to quickly authorize the domain of the auxiliary company, and enable CORS and iFrame for it. The travel planner web app also implements a Google sign-in option in its client application, and manages it from the Catalyst console.
