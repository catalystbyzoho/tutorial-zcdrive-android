+++
date= ""
title= "Request Method and End point"
description= "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags = [ "Description", "Common operations", "Instance methods" ]
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

{{% nested_fields children="open" border="no" expandable="yes" title="criteria" textformat="json" condition="optional" maxlength="200" %}}
The operator that will bind the criteria groups together. 
<br/><br/>
Supported Operators:AND, OR 
<br/><br/>
If you define two or more criteria groups, you can use the AND or the OR operator in your request. For example, you can specify a criteria like “column1 equal value 1 AND column2 contains value 2” in the format specified in the previous section.
<br/>
{{% nested_button%}}
{{% nested_fields children="close" border="yes" expandable="no" title="group_operator" textformat="json" condition="optional" maxlength=" " %}}
The operator that will bind the criteria groups together. 
<br/><br/>
Supported Operators:AND, OR 
<br/><br/>
If you define two or more criteria groups, you can use the AND or the OR operator in your request. For example, you can specify a criteria like “column1 equal value 1 AND column2 contains value 2” in the format specified in the previous section.
<br/>
{{% nested_button%}}
{{% nested_fields children="close" border="yes" expandable="no" title="group_operator" textformat="json" condition="optional" maxlength=" " %}}
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