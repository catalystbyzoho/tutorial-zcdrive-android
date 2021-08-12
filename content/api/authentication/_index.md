+++
date= "2020-09-08T22:11:57.883Z"
title= "Trucate Table"
head= "<h6>DEVELOP</h6>"
type= "api"
layout= "single"
weight= 1
+++


{{% section path="/api/authentication/" id="TrucateTable" %}}
<!-- Leftcontent -->
{{%divtag LeftContent%}}

### First File

### Description

This API enables you to truncate a specific table in the Data Store, by referring to the table’s unique ID or name. 

The truncate operation deletes all the records in the table, while retaining its schema. The columns of the table and the table’s metadata will still be available, after the operation has ended. 

You will receive notifications in your Catalyst console about the updates of the operation.

### Request Method & End point 1
<!-- shortcode 1 -->
{{%divtag c1%}}
{{%divtag c21 %}}
{{%divtag apired%}}
DELETE
{{%/divtag%}}
{{%divtag apigray%}}
/v1/project/{project_id}/segment/{segment_id}/cache
{{%/divtag%}}
{{%/divtag%}}
<hr style="margin-top:30px;"/>
{{%divtag c21%}}
{{%divtag bold%}}project_id{{%/divtag%}}
{{%divtag light%}}Numerical{{%/divtag%}}
{{%/divtag%}}
{{%divtag ft-st %}}The unique ID of the project{{%/divtag%}}
<hr/>
{{%divtag c21%}}
{{%divtag bold%}}segment_id{{%/divtag%}}
{{%divtag light%}}The unique ID of the cache segment{{%/divtag%}}
{{%/divtag%}}
{{%divtag ft-st %}}The unique ID of the project{{%/divtag%}}
<hr/>
{{%/divtag%}}
<!-- shortcode 1 ends -->

### Request Method & End point 2
<!-- shortcode 2 -->
{{%divtag c1%}}
{{%divtag c21 %}}
{{%divtag apigreen%}}
DELETE
{{%/divtag%}}
{{%divtag apigray%}}
/v1/project/{project_id}/segment/{segment_id}/cache
{{%/divtag%}}
{{%/divtag%}}
<hr style="margin-top:30px;"/>
{{%divtag c21%}}
{{%divtag bold%}}project_id{{%/divtag%}}
{{%divtag light%}}Numerical{{%/divtag%}}
{{%/divtag%}}
{{%divtag ft-st %}}The unique ID of the project{{%/divtag%}}
<hr/>
{{%divtag c21%}}
{{%divtag bold%}}segment_id{{%/divtag%}}
{{%divtag light%}}The unique ID of the cache segment{{%/divtag%}}
{{%/divtag%}}
{{%divtag ft-st %}}The unique ID of the project{{%/divtag%}}
<hr/>
{{%/divtag%}}


{{% panel_without_adjustment header="Sample Code" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
{{% /panel_without_adjustment %}}
<!-- shortcode 2 ends -->

{{%/divtag%}}
<!-- Rightcontent -->
{{%divtag RightContent%}}

{{% precode id="java" key="firstone" %}}
    "project_details java1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
    },
    "event_bus_details": {
        "name": "Default",
        "id": 12083622901983
    }
{{%/ precode %}}
{{% precode id="nodejs" key="firstone" %}}
    "project_details nodejs1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="python" key="firstone" %}}
    "project_details python1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% panel_with_select header="Who invented the Light Bulb?" key="firstone" %}}

{{% /panel_with_select %}}

{{% panel_without_adjustment header="Sample Code" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
{{% /panel_without_adjustment %}}

{{%/divtag%}}
{{%/section%}}