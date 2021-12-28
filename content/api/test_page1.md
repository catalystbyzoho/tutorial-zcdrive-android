+++
date= ""
title= "Test Page 1"
description= "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags = [ "Description", "Common operations", "Instance methods" ]
type= "api"
layout= "single"
weight= 2
+++

{{% section path="/api/test_page1/" id="TestPage1" %}}

<!-- Leftcontent -->
{{%divtag class="LeftContent"%}}

### Third File

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

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}    The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.{{% /panel_with_adjustment %}}

{{% panel header="Who invented the Light Bulb?" %}}import java.io.InputStreamReader; 
import java.util.ArrayList; 
import java.util.logging.Level; 
import java.util.logging.Logger; 
import javax.servlet.ServletInputStream; {{% /panel%}}

{{%/divtag%}}
{{%/section%}}