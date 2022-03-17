---
title: "Get a Component Instance"
description: "Node.js SDK Authentication"
tags : [ "Description", "Common operations", "Instance methods" ]
type: "sdk"
layout: "single"
linkTitle : "nodejsv3"
weight: 1
version:
  current_version: "v3"
  version_item:
    - name : "v1"
      url: "/sdk/nodejs/v1/authentication/component-instance/"
    - name : "v2"
      url: "/sdk/nodejs/v2/authentication/component-instance/"
    - name : "v3"
      url: "/sdk/nodejs/v3/authentication/component-instance/"
---

# Authentication

{{%link href="https://catalyst.zoho.com/help/authentication.html"%}}Catalyst Authentication{{%/link%}} features in Node.js SDK enable you to add end-users to your Catalyst serverless applications, fetch user details, manage their passwords, or delete them permanently. You can perform additional configurations on user accounts and roles, and manage the authentication of your application from the remote console.

## Get Component Instance
You can create a {{%badge%}}userManagement{{%/badge%}} component reference as shown below. This will not fire a server-side call. We will refer to this component instance in various code snippets of working with Authentication.

{{%code%}} 
//Get a UserManagement Instance
 let userManagement = app.userManagement();
{{%/code%}}

