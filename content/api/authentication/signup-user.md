+++
date= ""
title= "Add New User"
description= "Authentication API"
tags = [ "Description", "Common operations", "Instance methods" ]
type= "api"
layout= "single"
weight= 1
+++

{{% section path="/api/authentication/signup-user/" id="AddNewUser" %}}

<!-- Leftcontent -->
{{%divtag class="LeftContent"%}}

# Authentication

{{%link href="https://catalyst.zoho.com/help/authentication.html"%}}Catalyst Authentication{{%/link%}} features enable you to add end-users to your Catalyst serverless applications, configure their user accounts and roles, and manage user sign-in and authentication of your application.

## Add a New User

### Description

This API enables you to add a new end-user to the Catalyst application for a specific platform. When the user has signed up, unique identification values such as {{%link href="https://catalyst.zoho.com/help/users.html"%}}ZUID, userID, ZAAID{{%/link%}} are created for them.

{{%note%}}{{%bold class="bold-primary"%}}Note:{{%/bold%}} You will be able to add only 25 users in your application in the {{%link href="https://catalyst.zoho.com/help/environments.html"%}}development environment{{%/link%}}. After you deploy your application to production, you can include any number of end-users in it.{{%/note%}}

### Request Details
<br>

#### Request URL
<!-- shortcode 1 -->
{{%request class="apiyellow" req="POST" %}}<p>https://api.catalyst.zoho.com/baas/v1/project/{project_id}/project-user/signup</p>{{%/request%}}


{{%request_id id="project_id" data="Numerical" %}}The {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}unique ID{{%/link%}} of the project{{%/request_id%}}


#### Request Headers
{{%scope%}} **Authorization:** Zoho-oauthtoken 1000.910*************************** 16.2f****************************57 <br>
 {{%bold class="bold-primary"%}}Content-Type:{{%/bold%}} application/json <br>
 {{%bold class="bold-primary"%}}PROJECT_ID:{{%/bold%}} {project_id}
{{%/scope%}}
<br>

#### Scope
{{%scope%}}
scope=ZohoCatalyst.projects.users.CREATE
{{%/scope%}}
<br>
{{%note%}} {{%bold class="bold-primary"%}}Note:{{%/bold%}} Passing the {{%badge%}}{{%link href="https://catalyst.zoho.com/help/roles.html#Creating_Role"%}}role_id{{%/link%}}{{%/badge%}} of the role that the user must be assigned to, is optional. If you pass the {{%badge%}}role_id{{%/badge%}} in the API, authentication becomes mandatory. If you skip passing the {{%badge%}}role_id{{%/badge%}}, Catalyst does not authenticate the request and you need not specify the scope.{{%/note%}}
<br>

#### Request JSON Properties

{{%request_id id="ZAID" data="String" %}} {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}Unique identifier{{%/link%}} that maps an application to a project <br> Mandatory: Yes <br> Max Size: 100{{%/request_id%}}

{{%request_id id="platform_type" data="String" %}} Accepted values: {{%badge%}}web{{%/badge%}}, {{%badge%}}android{{%/badge%}}, {{%badge%}}ios{{%/badge%}} <br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}


{{%request_id id="redirect_url" data="String" %}} The URL to be redirected to, after the user signs up for the application <br> Mandatory: No <br> Max Size: 200{{%/request_id%}}

{{% nested_fields children="open" border="no" expandable="no" title="user_details" textformat="json" condition="mandatory" maxlength=" " %}}
 The JSON that contains the details of the user 
{{% nested_button%}}
{{% nested_fields children="close" border="yes" expandable="no" title="user_details" textformat="json" condition="mandatory" maxlength=" " %}}

{{%request_id id="first_name" data="String" %}} First name of the user <br> Mandatory: No <br> Max Size: 100{{%/request_id%}}
{{%request_id id="last_name" data="String" %}} Last name of the user <br> Mandatory: Yes <br> Max Size: 100{{%/request_id%}}
{{%request_id id="email_id" data="String" %}} Email address of the user <br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}
{{%request_id id="role_id" data="String" %}} Unique identification of the role the user must be assigned to <br> Mandatory: No <br> Max Size: N/A{{%/request_id%}}

{{% /nested_fields %}}
{{% /nested_fields %}}
 <br>


### Response Details

The response will contain the details of the user added in the {{%badge%}}data{{%/badge%}} key, including the metadata and identification values such as {{%badge%}}zaid{{%/badge%}}, {{%badge%}}user_id{{%/badge%}}, and {{%badge%}}org_id{{%/badge%}} that were generated.


<!-- shortcode 1 ends -->

{{%/divtag%}}
<!-- Rightcontent -->

{{%divtag class="RightContent"%}}

{{% panel_without_adjustment header="Sample Request" lang="bash"%}}curl -X POST \
  https://api.catalyst.zoho.com/baas/v1/project/3000000002001/project-user/signup \
  -H "Authorization: Zoho-oauthtoken 1000.910***************************16.2f****************************57"
  -H "Content-Type: application/json" \
  -H "PROJECT_ID: 1010309726" \
  -d '{
	"zaid":"1010309726",
	"user_details":{
		"first_name":"Rowena",
		"last_name":"Simmons",
		"email_id":"r.simmons@zylker.com",
                "role_id":"1256000000288012"  
	},
	"platform_type":"web",
	"redirect_url":"https://logistics.zylker.com/app/index.html"
}'
{{% /panel_without_adjustment %}}

{{% panel_without_adjustment header="Sample Response" lang="bash"%}}
    "status": "success",
    "data": {
        "zaid": 1010309726,
        "user_details": {
            "user_id": 671930455,
            "zuid": 3000000006001,
            "zaaid": 1011520995,
            "status": "ACTIVE",
            "is_confirmed": true,
            "email_id": "r.simmons@zylker.com",
            "first_name": "Rowena",
            "last_name": "Simmons",
            "created_time": "May 13, 2019 09:16 PM",
            "modified_time": "May 13, 2019 09:16 PM",
            "invited_time": "May 13, 2019 09:16 PM",
            "role_details": {
                "role_id": 1256000000288012,
                "role_name": "App Administrator"
            },
           "user_id": 671930455
        },
        "redirect_url": "https://logistics.zylker.com/app/index.html",
        "platform_type": "web",
        "org_id": 1011520995
    }
}
{{% /panel_without_adjustment %}}

{{%expand 
question="SDK Documentation" id="hello1" %}}
{{%link href="https://catalyst.zoho.com/sdk/javasdk/um_reguser.html"%}}Add New User- Java SDK{{%link%}}<br>
{{%link href="https://catalyst.zoho.com/sdk/nodeJS-sdk/um_reguser.html"%}}Add New User- Node.js SDK{{%link%}}<br>
{{%link href="https://catalyst.zoho.com/sdk/websdk/um_reguser.html"%}}Add New User- Web SDK{{%link%}}<br>
{{% /expand%}}

{{%/divtag%}}
{{%/section%}}