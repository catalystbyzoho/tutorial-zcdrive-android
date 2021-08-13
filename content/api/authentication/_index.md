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
    { 
        “status”: “success”, 
        “data”: “The table will be truncated Shortly. Kindly Check 
    }
{{% /panel_without_adjustment %}}

{{%/divtag%}}
{{%/section%}}