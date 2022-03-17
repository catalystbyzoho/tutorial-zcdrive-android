---
title: "CLI Command Reference"
description: "CLI Command Reference."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "cli"
layout: "single"
linkTitle : "cliv3"
weight: 1
version:
  current_version: "v3"
  version_item:
    - name : "v1"
      url: "/cli/v1/cli-command-reference/"
    - name : "v2"
      url: "/cli/v2/cli-command-reference/"
    - name : "v3"
      url: "/cli/v3/cli-command-reference/"
---

# CLI Command Reference

You must have Catalyst CLI installed in your system to access the Catalyst commands. Refer to the {{%link href="https://catalyst.zoho.com/help/installing-catalyst-cli.html"%}}Installing Catalyst CLI help page{{%/link%}} for the steps.

### Options

{{%divtag class="table-width"%}}

| Command Syntax  | Usage |
| :--- | :--- |
| {{%link href="https://catalyst.zoho.com/help/cli-options.html#Version"%}}{{%badge%}}-v{{%/badge%}} or {{%badge%}}--version{{%/badge%}}{{%/link%}} |	Print the Catalyst CLI version number |

| {{%link href="https://catalyst.zoho.com/help/cli-options.html#Project"%}}{{%badge%}}-p{{%/badge%}} or {{%badge%}}--project &lt;name_or_project_id&gt;{{%/badge%}}{{%/link%}}      | Specify the Catalyst project to be used for a command |

| {{%link href="https://catalyst.zoho.com/help/cli-options.html#Token"%}}{{%badge%}}--token &lt;token&gt;{{%/badge%}}{{%/link%}}      | Supply an authentication token for a command |

|{{%link href="https://catalyst.zoho.com/help/cli-options.html#DC"%}}{{%badge%}}--dc &lt;us or eu or in&gt;{{%/badge%}}{{%/link%}}      | Supply a data center for a command |

| {{%badge%}}{{%link href="https://catalyst.zoho.com/help/cli-options.html#Verbose"%}}--verbose{{%/link%}}{{%/badge%}}     |	Change the log level to verbose for debugging purposes |

| {{%link href="https://catalyst.zoho.com/help/cli-options.html#Help"%}}{{%badge%}}-h{{%/badge%}} or {{%badge%}}--help{{%/badge%}}{{%/link%}}      |	Display help for a Catalyst command |

{{%/divtag%}}


<table style="width:100%">
  <tr>
    <th>Command Syntax</th>
    <th>Usage</th>
  </tr>

  <tr>
    <td>{{%link href="https://catalyst.zoho.com/help/cli-options.html#Version"%}}{{%badge%}}-v{{%/badge%}} or {{%badge%}}--version{{%/badge%}}{{%/link%}}</td>
    <td>Print the Catalyst CLI version number</td>
  </tr>

  <tr>
    <td>{{%link href="https://catalyst.zoho.com/help/cli-options.html#Project"%}}{{%badge%}}-p{{%/badge%}} or {{%badge%}}--project &lt;name_or_project_id&gt;{{%/badge%}}{{%/link%}} </td>
    <td>Specify the Catalyst project to be used for a command </td>
  </tr>

  <tr>
    <td>{{%badge%}}{{%link href="https://catalyst.zoho.com/help/cli-options.html#Token"%}}--token &lt;token&gt;{{%/link%}}{{%/badge%}}</td>
    <td>Supply an authentication token for a command</td>
  </tr>

  <tr>
    <td>{{%badge%}}{{%link href="https://catalyst.zoho.com/help/cli-options.html#DC"%}}--dc &lt;us or eu or in&gt;{{%/link%}}{{%/badge%}}  </td>
    <td>Supply a data center for a command</td>
  </tr>

  <tr>
    <td>{{%badge%}}{{%link href="https://catalyst.zoho.com/help/cli-options.html#Verbose"%}}--verbose{{%/link%}}{{%/badge%}}</td>
    <td>Change the log level to verbose for debugging purposes</td>
  </tr>

  <tr>
    <td>{{%link href="https://catalyst.zoho.com/help/cli-options.html#Help"%}}{{%badge%}}-h{{%/badge%}} or {{%badge%}}--help{{%/badge%}}{{%/link%}}  </td>
    <td>Display help for a Catalyst command</td>
  </tr>



<br>

{{%divtag%}}

| Format      | Example |
| :--- | :---: |
| YYYY-MM-DD      | 2020-01-20      |
| YYYY-MM-DD      | 2020-01-20      |
| YYYY/MM/DD hh:mm:ss      | 2020/01/20 23:54:30     |
| YYYY-MM-DDThh:mm:ss.sTZD      | 2020-01-20T05:19:31.665523 + 00:00      |

{{%/divtag%}}
