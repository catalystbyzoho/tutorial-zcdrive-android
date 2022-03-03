+++
date= ""
title= "Add User Existing Org"
description= "Authentication API"
tags = [ "Description", "Common operations", "Instance methods" ]
type= "api"
layout= "single"
weight= 2
+++

{{% section path="/api/authentication/signup-user-existing-org/" id="AddUserExistingOrg" %}}

<!-- Leftcontent -->
{{%divtag class="LeftContent"%}}

### Add a New User to an Exsiting Organization

### Description

This API enables you to add a new end-user to an existing organization without creating a new organization for them. This can be done by providing the {{%badge%}}{{%link href="https://catalyst.zoho.com/help/users.html"%}}ZAAID{{%/link%}}{{%/badge%}} of the organization that the user must be added to. The organization of a user cannot be changed later, once it is associated with their account.

When the user has signed up, unique identification values such as {{%badge%}}ZUID{{%/badge%}} and {{%badge%}}User ID{{%/badge%}} are created for them.

### Request Details

#### Request URL
<!-- shortcode 1 -->
{{%request class="apiyellow" req="POST" %}}<p>https://api.catalyst.zoho.com/baas/v1/project/{project_id}/project-user</p>{{%/request%}}

{{%request_id id="project_id" data="Numerical" %}}The {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}unique ID{{%/link%}} of the project{{%/request_id%}}
<br>

#### Request Headers
{{%scope%}} **Authorization:** Zoho-oauthtoken 1000.910*************************** 16.2f****************************57 <br>
 {{%bold class="bold-primary"%}}Content-Type:{{%/bold%}} application/json <br>
{{%/scope%}}
<br>

#### Scope
{{%scope%}}
scope=ZohoCatalyst.projects.users.CREATE
{{%/scope%}}
<br>

#### Request JSON Properties

{{%request_id id="ZAID" data="String" %}} {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}Unique identifier{{%/link%}} that maps an application to a project <br> Mandatory: No <br> Max Size: 100{{%/request_id%}}

{{%request_id id="platform_type" data="String" %}} Accepted values: {{%badge%}}web{{%/badge%}}, {{%badge%}}android{{%/badge%}}, {{%badge%}}ios{{%/badge%}} <br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}

{{%request_id id="redirect_url" data="String" %}} The URL to be redirected to, after the user signs up for the application <br> Mandatory: No <br> Max Size: 200{{%/request_id%}}

{{% nested_fields children="open" border="no" expandable="no" title="user_details" textformat="json" condition="mandatory" maxsize=" " %}}
 The JSON that contains the details of the user 
{{% nested_button button_name = "Show Child Properties"%}}
{{% nested_fields children="close" border="yes" expandable="no" title="user_details" textformat="json" condition="mandatory" maxsize=" " %}}

{{%request_id id="first_name" data="String" %}} First name of the user <br> Mandatory: No <br> Max Size: 100{{%/request_id%}}
{{%request_id id="last_name" data="String" %}} Last name of the user <br> Mandatory: Yes <br> Max Size: 100{{%/request_id%}}
{{%request_id id="email_id" data="String" %}} Email address of the user <br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}
{{%request_id id="zaaid" data="String" %}} Unique identification of the organization that the user belongs to<br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}

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
  https://api.catalyst.zoho.com/baas/v1/project/3000000002001/project-user \
  -H "Authorization: Zoho-oauthtoken 1000.910***************************16.2f****************************57"
  -H "Content-Type: application/json" \
  -d '{
	"user_details":{
                "first_name":"John",
		"last_name":"Winchester",
		"email_id":"john.w@zylker.com",
		"zaaid":4567899
	},
        "redirect_url": "https://logistics.zylker.com/app/index.html"
	"platform_type":"web"
}'
{{% /panel_without_adjustment %}}

{{% panel_without_adjustment header="Sample Response" lang="bash"%}}
 {
    "status": "success",
    "data": {
        "zaid": 1011481670,
        "user_details": {
            "user_id": 671930400,
            "zuid": 3000000006001,
            "zaaid": 1011520995,
            "status": "ACTIVE",
            "is_confirmed": true,
            "email_id": "john.w@zylker.com",
            "first_name": "John",
            "last_name": "Winchester",
            "created_time": "May 13, 2019 09:16 PM",
            "modified_time": "May 13, 2019 09:16 PM",
            "invited_time": "May 13, 2019 09:16 PM",
            "role_id": 3000000005015
        },
        "redirect_url": "https://logistics.zylker.com/app/index.html",
        "platform_type": "web",
        "org_id": 1011520995
    }
}
{{% /panel_without_adjustment %}}

{{%expand 
question="SDK Documentation" id="hello1" %}}
{{%link href="https://catalyst.zoho.com/sdk/javasdk/um_regneworg.html"%}}Add New User to Existing Org- Java SDK{{%link%}}<br>
{{%link href="https://catalyst.zoho.com/sdk/nodeJS-sdk/um_reguserorg.html"%}}Add New User to Existing Org- Node.js SDK{{%link%}}
{{% /expand%}}

{{%/divtag%}}
{{%/section%}}