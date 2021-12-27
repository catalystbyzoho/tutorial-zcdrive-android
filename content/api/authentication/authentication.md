+++
date= ""
title= "Anthentication"
description= "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags = [ "Description", "Common operations", "Instance methods" ]
type= "api"
layout= "single"
weight= 1
+++


{{% section path="/api/authentication/authentication/" id="Anthentication" %}}
<!-- Leftcontent -->
{{%divtag class="LeftContent"%}}

### First File

### Description

This API enables you to truncate a specific table in the Data Store, by referring to the table’s unique ID or name. 

The truncate operation deletes all the records in the table, while retaining its schema. The columns of the table and the table’s metadata will still be available, after the operation has ended. 

You will receive notifications in your Catalyst console about the updates of the operation.

### Request Method & End point 1
<!-- shortcode 1 -->
{{%request class="apired" req="DELETE" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}
{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}

### Scope
{{%scope%}}
Authorization: Zoho-oauthtoken <br/>
1000.910*************************** 16.2f ****************************57 Content-Type: application/json
{{%/scope%}}
<!-- shortcode 1 ends -->

### Request Method & End point 2
<!-- shortcode 2 -->
{{%request class="apigreen" req="DELETE" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}
{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}
<!-- shortcode 2 ends -->

{{%/divtag%}}
<!-- Rightcontent -->

{{%divtag class="RightContent"%}}
{{% panel_with_select header="Who invented the Light Bulb?" %}}
{{% divtag id="Java" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
{{% /divtag %}} 
{{% divtag id="NodeJS" %}}
    import NodeJS.key1.util.ArrayList; 
    import NodeJS.key1.util.logging.Level; 
    import NodeJS.key1.util.logging.Logger; 
    import NodeJSx.key1.servlet.ServletInputStream;
{{% /divtag %}} 
{{% divtag id="Python" %}}
    import Python.key1.util.ArrayList; 
    import Python.key1.util.logging.Level; 
    import Python.key1.util.logging.Logger; 
    import Pythonx.key1.servlet.ServletInputStream;
{{% /divtag %}} 
{{% /panel_with_select %}}
{{%/divtag%}}
{{%/section%}}