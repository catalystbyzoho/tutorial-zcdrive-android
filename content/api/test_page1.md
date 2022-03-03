+++
date= ""
title= "Test Page 1"
description= "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags = [ "Description", "Common operations", "Instance methods" ]
type= "api"
layout= "single"
weight= 3
+++

{{% section path="/api/test_page1/" id="TestPage1" %}}

<!-- Leftcontent -->
{{%divtag class="LeftContent"%}}

### Third File

### Description

This API enables you to truncate a specific table in the Data Store, by referring to the table’s unique ID or name. 

The truncate operation deletes all the records in the table, while retaining its schema. The columns of the table and the table’s metadata will still be available, after the operation has ended. 

You will receive notifications in your Catalyst console about the updates of the operation.


#### Nested Fields

{{% nested_fields children="open" border="no" expandable="yes" title="criteria" textformat="json" condition="optional" maxsize="200" %}}
The operator that will bind the criteria groups together. 
<br/><br/>
Supported Operators:AND, OR 
<br/><br/>
If you define two or more criteria groups, you can use the AND or the OR operator in your request. For example, you can specify a criteria like “column1 equal value 1 AND column2 contains value 2” in the format specified in the previous section.
<br/>
{{% nested_button button_name = "Show Child Properties"%}}
{{% nested_fields children="close" border="yes" expandable="no" title="group_operator" textformat="json" condition="optional" %}}
The operator that will bind the criteria groups together. 
<br/><br/>
Supported Operators:AND, OR 
<br/><br/>
If you define two or more criteria groups, you can use the AND or the OR operator in your request. For example, you can specify a criteria like “column1 equal value 1 AND column2 contains value 2” in the format specified in the previous section.
<br/>
{{% nested_button button_name = "Show Child Properties"%}}
{{% nested_fields children="close" border="yes" expandable="no" title="group_operator" textformat="json" condition="optional" %}}
The operator that will bind the criteria groups together. 
<br/>
<hr/>
If you define two or more criteria groups, you can use the AND or the OR operator in your request. For example, you can specify a criteria like “column1 equal value 1 AND column2 contains value 2” in the format specified in the previous section.
{{% /nested_fields %}}
{{% /nested_fields %}}
{{% /nested_fields %}}

### Request Method & End point 1
<!-- shortcode 1 -->
{{%request class="apired" req="DELETE" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}

{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}
<!-- shortcode 1 ends -->

### Request Method & End point 2
<!-- shortcode 2 -->
{{%request class="apigreen" req="GET" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}
{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}
<!-- shortcode 2 ends -->


#### Request URL
<!-- shortcode 1 -->

{{%request class="apigreen" req="GET" %}}<p>https://api.catalyst.zoho.com/baas/v1/project/{project_id}/project-user/signup{project_id}/project-user/signup</p>{{%/request%}}
{{%request class="apiyellow" req="POST" %}}<p>https://api.catalyst.zoho.com/baas/v1/project/{project_id}/project-user/signup{project_id}/project-user/signup</p>{{%/request%}}
{{%request class="apiblue" req="PUT" %}}<p>https://api.catalyst.zoho.com/baas/v1/project/{project_id}/project-user/signup{project_id}/project-user/signup</p>{{%/request%}}
{{%request class="apired" req="DELETE" %}}<p>https://api.catalyst.zoho.com/baas/v1/project/{project_id}/project-user/signup{project_id}/project-user/signup</p>{{%/request%}}

{{%request_id id="project_id" data="Numerical" %}}The {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}unique ID of the project{{%/link%}}{{%/request_id%}}


### Request Headers
{{%scope%}} **Authorization:** Zoho-oauthtoken 1000.910*************************** 16.2f****************************57 <br>
 {{%bold class="bold"%}}Content-Type:{{%/bold%}} application/json <br>
 {{%bold class="bold"%}}PROJECT_ID:{{%/bold%}} {project_id}
{{%/scope%}}

### Scope
{{%scope%}}
scope=ZohoCatalyst.projects.users.CREATE
{{%/scope%}}
<br>
{{%note%}} {{%bold class="bold-primary"%}}Note:{{%/bold%}} Passing the {{%badge%}}{{%link href="https://catalyst.zoho.com/help/roles.html#Creating_Role"%}}role_id{{%/link%}}{{%/badge%}} of the role that the user must be assigned to, is optional. If you pass the {{%badge%}}role_id{{%/badge%}} in the API, authentication becomes mandatory. If you skip passing the {{%badge%}}role_id{{%/badge%}}, Catalyst does not authenticate the request and you need not specify the scope.{{%/note%}}
<br>

{{%request_id id="ZAID" data="String" %}} {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}Unique identifier{{%/link%}} that maps an application to a project <br> Mandatory: Yes <br> Max Size: 100{{%/request_id%}}

{{%request_id id="platform_type" data="String" %}} Accepted values: {{%badge%}}web{{%/badge%}}, {{%badge%}}android{{%/badge%}}, {{%badge%}}ios{{%/badge%}} <br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}


{{%request_id id="redirect_url" data="String" %}} The URL to be redirected to, after the user signs up for the application <br> Mandatory: No <br> Max Size: 200{{%/request_id%}}

{{%request_id id="user_details" data="JSON" %}} The JSON that contains the details of the user <br> Mandatory: Yes{{%/request_id%}}

**user_details JSON**

{{%request_id id="first_name" data="String" %}} First name of the user <br> Mandatory: No <br> Max Size: 100{{%/request_id%}}
{{%request_id id="last_name" data="String" %}} Last name of the user <br> Mandatory: Yes <br> Max Size: 100{{%/request_id%}}
{{%request_id id="email_id" data="String" %}} Email address of the user <br> Mandatory: Yes <br> Max Size: N/A{{%/request_id%}}
{{%request_id id="role_id" data="String" %}} Unique identification of the role the user must be assigned to <br> Mandatory: No <br> Max Size: N/A{{%/request_id%}}



<!-- shortcode 1 ends -->



{{%/divtag%}}
<!-- Rightcontent -->
{{%divtag class="RightContent"%}}

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}    The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.{{% /panel_with_adjustment %}}

{{% panel header="Who invented the Light Bulb?" %}}import java.io.InputStreamReader; 
import java.util.ArrayList; 
import java.util.logging.Level; 
import java.util.logging.Logger; 
import javax.servlet.ServletInputStream; {{% /panel%}}

{{% panel_with_select header="Who invented the Light Bulb?" %}}
{{% divtag id="Java" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; {{% /divtag %}} 
{{% divtag id="NodeJS" %}}
    import NodeJS.key1.util.ArrayList; 
    import NodeJS.key1.util.logging.Level; 
    import NodeJS.key1.util.logging.Logger; 
    import NodeJSx.key1.servlet.ServletInputStream;{{% /divtag %}} 
{{% divtag id="Python" %}}
    import Python.key1.util.ArrayList; 
    import Python.key1.util.logging.Level; 
    import Python.key1.util.logging.Logger; 
    import Pythonx.key1.servlet.ServletInputStream;{{% /divtag %}} 
{{% /panel_with_select %}}

{{%/divtag%}}
{{%/section%}}



{{% section path="/api/authentication/shortcodes/" id="RequestMethodandEndpoint" %}}

<!-- Leftcontent -->
{{%divtag class="LeftContent"%}}

### Second File

### Description

This API enables you to truncate a specific table in the Data Store, by referring to the table’s unique ID or name. 

The truncate operation deletes all the records in the table, while retaining its schema. The columns of the table and the table’s metadata will still be available, after the operation has ended. 

You will receive notifications in your Catalyst console about the updates of the operation.

### Request Method & End point 1
<!-- shortcode 1 -->
{{%request class="apired" req="DELETE" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}
{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}
<!-- shortcode 1 ends -->

### Request Method & End point 2
<!-- shortcode 2 -->
{{%request class="apigreen" req="GET" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}
{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}
<!-- shortcode 2 ends -->

{{%/divtag%}}
<!-- Rightcontent -->
{{%divtag class="RightContent"%}}
{{%code%}}hugo server{{%/code%}}

{{% panel_without_adjustment header="Who invented the Light Bulb?" %}}    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; {{% /panel_without_adjustment %}}

{{%/divtag%}}
{{%/section%}}