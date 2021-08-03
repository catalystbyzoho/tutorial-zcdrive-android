+++
date= "2020-09-08T22:11:57.883Z"
title= "Shortcodes"
weight= 1
+++

#

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

{{%expand 
question="How do I resolve the error “HTTP Error: 409 - The given function_name already exists”?" 
id="hello4" %}}
YAllow you to highlight information or put it in a box. They create a colored box surrounding your text{{% /expand%}}

### Panel with Adjustment

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

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_with_adjustment %}}

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_with_adjustment %}}

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_with_adjustment %}}

### Button

{{%divtag red%}}Success{{%/divtag%}}
{{%divtag green%}}Success{{%/divtag%}}

### Columns

{{< columns >}}
#### Left Content
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. 

<--->

#### Right Content
Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
{{< /columns >}}

### Panel without Adjustment

{{% panel_without_adjustment header="Who invented the Light Bulb?" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_without_adjustment %}}

### Panel with Plane Content

{{% panel header="Who invented the Light Bulb?" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel%}}

### Panel with Select

{{% panel_with_select header="Who invented the Light Bulb?" %}}
{{% precode id="java"%}}
    "project_details java1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="nodejs"%}}
    "project_details nodejs1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="python"%}}
    "project_details python1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% /panel_with_select %}}
