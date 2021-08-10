+++
date= "2020-09-08T22:11:57.883Z"
title= "Test Page 2"
type= "api"
layout= "single"
weight= 3
+++

{{% section path="test_page2" id="TestPage2" %}}

### Fourth File 

{{%divtag c1%}}
{{%divtag c2%}}

### Description

This API enables you to truncate a specific table in the Data Store, by referring to the table’s unique ID or name. 

The truncate operation deletes all the records in the table, while retaining its schema. The columns of the table and the table’s metadata will still be available, after the operation has ended. 

You will receive notifications in your Catalyst console about the updates of the operation.
{{%/divtag%}}
{{%/divtag%}}

### Request Method & End point

{{%divtag c1%}}
{{%divtag c2%}}
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
{{%divtag c3%}}
<!-- {{% panel_with_select header="Sample Request" key="firstone" %}}
{{% /panel_with_select %}} -->
{{%/divtag%}}
{{%/divtag%}}


<!-- second page -->

### Request Method & End point

{{%divtag c1%}}
{{%divtag c2%}}
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
{{%divtag c3%}}
<!-- {{% panel_with_select header="Sample Request1" key="secondone" %}}{{% /panel_with_select %}} -->
{{%/divtag%}}
{{%/divtag%}}

{{%/section%}}