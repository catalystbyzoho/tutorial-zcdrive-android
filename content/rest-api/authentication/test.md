+++
date= "2020-09-08T22:11:57.883Z"
title= "Shortcodes"
type= "sdk"
layout= "single"
weight= 1
+++
 
### Note
{{%note%}}**This is** an note !{{%/note%}}

### Code
{{%code%}}
hugo server
{{%/code%}}

{{%code%}}
    {
        "project_details": {
            "id": 57127989012782,
            "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        },
        "data": {
            "platform_type": web,
            "user_details": {
                "email_id": "emma@zylker.com",
                "role_details": {
                    "role_name": "App Admin",
                    "role_id": 2817903788190
                },
                "zaaid": 1002347509,
                "created_time": "Sep 10, 2019 11:47 PM",
                "invited_time": "Sep 10, 2019 11:47 PM",
                "modified_time": "Sep 10, 2019 11:47 PM",
                "user_id": 4310838901733,
                "is_confirmed": true,
                "last_name": "Burrows",
                "first_name": "Amelia",
                "zuid": 1002342431,
                "status": "ACTIVE"
            },
            "org_id": 1002347509,
            "zaid": 10023451351,
            "redirect_url": null
        },
        "current_project": {
            "id": 579089178290,
            "project_name": "ShipmentTracking"
        },
        "action": "SignUp",
        "source": "UserManagement",
        "event_time": 1568139437092
    }
{{%/code%}}

### Table
| Component      | Event | Description |
| :--- | :---: | :---: |
| Data Store | Insert <br> checking for new line | Insert data in a table |
|            | Update | Update a table |
|            | Delete  | Delete a table |
| Cache      | Put     | Put data in a segment |

### Tabs
{{< tabs >}}
{{% tab "PHP" %}} 
Php allow you to highlight information or put it in a box. They create a colored box surrounding your text
{{% /tab %}}
{{< tab "Golang" >}} 
Golang allow you to highlight information or put it in a box. They create a colored box surrounding your text
{{< /tab >}}

{{< tab "Java" >}} 
Java allow you to highlight information or put it in a box. They create a colored box surrounding your text
{{< /tab >}}
{{< /tabs >}}


### Badge

{{% badge info %}}info{{% /badge %}}
{{% badge light %}}light{{% /badge %}}
{{% badge dark %}}dark{{% /badge %}}


### Expand

{{%expand "Is this docport theme rocks ?" %}}YAllow you to highlight information or put it in a box. They create a colored box surrounding your text{{% /expand%}}

### Panel
{{% panel_with_adjustment header="Lorem Ipsum is simply dummy text of the printing" footer="button" %}}
    {
        "project_details_help_docs": {
            "id": 57127989012782,
            "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        },
        "data": {
            "platform_type": web,
            "user_details": {
                "email_id": "emma@zylker.com",
                "role_details": {
                    "role_name": "App Admin",
                    "role_id": 2817903788190
                },
                "zaaid": 1002347509,
                "created_time": "Sep 10, 2019 11:47 PM",
                "invited_time": "Sep 10, 2019 11:47 PM",
                "modified_time": "Sep 10, 2019 11:47 PM",
                "user_id": 4310838901733,
                "is_confirmed": true,
                "last_name": "Burrows",
                "first_name": "Amelia",
                "zuid": 1002342431,
                "status": "ACTIVE"
            },
            "org_id": 1002347509,
            "zaid": 10023451351,
            "redirect_url": null
        },
        "current_project": {
            "id": 579089178290,
            "project_name": "ShipmentTracking"
        },
        "action": "SignUp",
        "source": "UserManagement",
        "event_time": 1568139437092
    }
{{% /panel_with_adjustment %}}

### Button

{{%divtag red%}}Success{{%/divtag%}}
{{%divtag green%}}Success{{%/divtag%}}
