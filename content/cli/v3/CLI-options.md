---
title: "CLI Options"
description: "CLI Options."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "cli"
layout: "single"
linkTitle : "cliv3"
weight: 2
version:
  current_version: "v3"
  version_item:
    - name : "v1"
      url: "/cli/v1/cli-options/"
    - name : "v2"
      url: "/cli/v2/cli-options/"
    - name : "v3"
      url: "/cli/v3/cli-options/"
---


# CLI Options


Catalyst provides the following CLI options that you can use with any of the CLI commands: 

### -v | --version

This option prints the version number of the Catalyst CLI that you are currently using. You can type {{%badge%}}-v{{%/badge%}} or {{%badge%}}--version{{%/badge%}} with the catalyst command in the following way:

{{%cli lang="javascript" class="cli"%}}catalyst --version {{%/cli%}}

{{%image src="/images/cli/cli-options/catalyst_cli_options_version.jpg" class="w80" alt="cli-version" %}}{{%/image%}}


### -p | --project&lt;name_or_project_id&gt;

The {{%badge%}}-p{{%/badge%}} or {{%badge%}}--project{{%/badge%}} option is used to provide the name or the {{%link href="https://catalyst.zoho.com/help/general-settings.html"%}}ID of the Catalyst project{{%/link%}} the CLI command must be executed for. This option is highly beneficial when you have not initialized or made a project active for your working directory in the CLI. You can also use this option if you are executing Catalyst CLI commands from a remote system, such as a remote code repository or CI system, without an active login session using a token.

You can execute the Catalyst command by directly specifying the project the command is intended for, without having to initialize or enable a project in the CLI. The name or the ID of the project must be mentioned with the option.

For example, to deploy the client component of the *EventApp* project from the CLI, we execute the following command from the project directory:


{{%cli lang="javascript" class="cli"%}}catalyst deploy --only client -p|--project EventApp {{%/cli%}}

{{%image src="/images/cli/cli-options/catalyst_cli_options_project.jpg" class="w100" alt="cli-version" %}}{{%/image%}}






