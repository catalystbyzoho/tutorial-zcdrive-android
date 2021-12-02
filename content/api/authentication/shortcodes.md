+++
date= "2020-09-08T22:11:57.883Z"
title= "Request Method and End point"
type= "api"
layout= "single"
weight= 2
+++

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
{{%request class="apigreen" req="DELETE" %}}/v1/project/{project_id}/segment/{segment_id}/cache{{%/request%}}
{{%request_id id="project_id" data="Numerical" %}}The unique ID of the project{{%/request_id%}}
{{%request_id id="segment_id" data="The unique ID of the cache segment" %}}The unique ID of the project{{%/request_id%}}
<!-- shortcode 2 ends -->

{{%/divtag%}}
<!-- Rightcontent -->
{{%divtag class="RightContent"%}}

{{% panel_without_adjustment header="Who invented the Light Bulb?" %}}    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
{{% /panel_without_adjustment %}}

{{%/divtag%}}
{{%/section%}}