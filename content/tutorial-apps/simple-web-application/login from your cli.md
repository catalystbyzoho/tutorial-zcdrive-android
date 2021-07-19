---
title: "Login from your CLI"
type: "tutorial-apps"
layout: "single"
weight: 6
related_link:
  enable : true
  related_link_item:
    - name : "Search"
      url: "/help/authentication"
    - name : "Mail"
      url: "/help/authentication"
    - name : "Push Notification"
      url: "/help/authentication"
    - name : "Event Listeners"
      url: "/help/authentication"
    - name : "Github Integration"
      url: "/help/authentication"
---



Catalyst Authentication feature enables you to add end-users to your Catalyst serverless applications, configure their user accounts and roles, and manage user sign-in and authentication of your application directly from the Catalyst console.

### Login from your CLI

You can perform the following actions using Authentication from the remote console:

* Add or remove the end-users of your application
* Enable or disable their user accounts in your application
* Create templates for emails to invite new users to access the application
* Reset their passwords
* Access Catalyst's user sign-in code snippet that you can include in your application
* Configure *Google and Zoho sign-in providers* for your application
* Create and manage roles to define the levels of access and permissions for users
* Authorize external domains and enable `CORS` and `iFrame` for your application in them

The document is divided into five pages to cover the five features of Catalyst Authentication: **Users, Email Templates, Sign-in Method, Roles, Authorized Domains.** Each section explains the key concepts, benefits, and implementation of each feature.

To install it manually, you must execute this command from the Node.js function's directory using your terminal:


If we enter the number of jobs as 2, the associated function, which returns the name object, is called two times parallelly and the input is passed to it. The output of the first iteration is generated as:


To learn about using Authentication in the development and production environments, visit the [Environments help page](/help/cache/test).


### Key Concepts

Before you configure definitions in Security Rules, understand its fundamental concepts in detail.

#### Configurations Available in Security Rules

Security rules enable you to configure HTTP access and authentication for each Basic I/O and Advanced I/O function in your project, by defining values for each of those parameters in the JSON file.

The following values can be set for each parameter definition for a function:

| Available Parameters      | Allowed Values |
| :--- | :---: |
| `methods`      | GET, POST, DELETE, PUT, PATCH       |
| `authentication`   | optional, required        |


#### The Default Event Listener

Every Catalyst project contains a default event listener that is created when the project is created. The behavior and functionality of the default event listener is completely different from that of a custom event listener. The default event listener is used to link a Catalyst component to a target function, and passes the component data to the function when it is invoked. 

The following table describes the list of Catalyst components and the event occurrences in them that can be associated with the default event listener:

| Component      | Event | Description |
| :--- | :---: | :---: |
| Data Store | Insert <br> checking for new line | Insert data in a table\ |
|            | Update\ | Update a table\ |
|            | Delete  | Delete a table |
| Cache      | Put     | Put data in a segment |




### SDK and API documentation

You can also add and manage the end-users of your application, and obtain user details using `Catalyst API and SDK`. For more information and code samples on working in these programming environments, refer to these help pages:

* [Authentication - Java SDK](/help/authentication)
* [Authentication - Node.js SDK](/help/authentication)
* [Authentication - Web SDK](/help/authentication)
* [Authentication - API](/help/authentication)


### Use Cases
Catalyst Authentication features can be used in the following scenarios:

* An internal web forum, meant for the employees of an organization to discuss and gather information about the activities and tasks undertaken in various departments, uses Catalyst Authentication to manage its users. The collaborators of the web app development team can invite users to access the forum, assign roles to users, modify user information, or delete users from the console.\
 \
 The application provides three levels of access to its various users: App admin, App Moderator, App User. The users of the user role can only submit posts in the forum, while the moderators can approve or decline the content submitted for approval, and the administrators can also permanently delete the content in the forum. These permissions for the user roles are configured in the [Data Store](/help/authentication) and [File Store](/help/authentication).
* A travel planner web app requires its widget to be embedded in a hotel booking website, developed by one of its auxiliary companies. The hotel booking application also requires access to the travel web app's function endpoints, to obtain specific data of their common customers. The travel web app makes use of Catalyst Authentication to quickly authorize the domain of the auxiliary company, and enable CORS and iFrame for it. The travel planner web app also implements a Google sign-in option in its client application, and manages it from the Catalyst console.