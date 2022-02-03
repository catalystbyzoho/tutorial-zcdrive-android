---
title: "Initialize the Project"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 3
language:
  current_language: "Java"
  language_item:
    - name : "Java"
      url: "/tutorial-apps/simple-web-application/java/introduction"
    - name : "NodeJS"
      url: "/tutorial-apps/simple-web-application/nodejs/introduction"
related_link:
  enable : true
  related_link_item:
    - name : "Initialize CLI Resources"
      url: "/help/cli-init"

    - name : "Project Directory Structure"
      url: "/help/project-directory-structure"
---



# Initialize a Project

You can now begin working on your Catalyst project from the CLI. The first step is to initialize the project in an empty directory. This will be the home directory of your project and all of the project files will be saved in it.

You can learn more about this from the {{%link href="https://www.zoho.com/catalyst/help/project-directory-structure.html"%}}Project Directory Structure help page{{%/link%}}. You can learn about initializing a project in detail from the {{%link href="https://www.zoho.com/catalyst/help/cli-init.html"%}}CLI help documentation{{%/link%}}.

For the Alien City application, we will initialize the client and the Advanced I/O function components. As mentioned earlier, you can code the Advanced I/O function in the Java or Node.js platform, based on your convenience. 

1. Create a folder for the project on your local machine and navigate to it from the terminal. 

2. Initialize a project by executing the following command from that directory:
\
{{%cli lang="javascript" class="cli"%}}catalyst init {{%/cli%}}

3. Select **Client** and **Functions**, then press the **Enter** key to initialize. 
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_1.jpg" class="w90" alt="alien-city-client" %}}{{%/image%}}

4. The CLI will now ask you to associate a Catalyst project with the directory. Associate it with the project that we created earlier from the console. Select **AlienCity** from the list and press **Enter**.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_2.jpg" class="w80" alt="alien-city-client" %}}{{%/image%}}

5. The CLI will initiate the function setup. Select **AdvancedIO** as the function type.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_3.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

6. Select the latest runtimes of the Java or Node.js programming environment based on your preference.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_4.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

7. If you select *node10*, enter the "**alien_city_function**" as the package name, "**index.js**" as the entry point, and your email address as the author and press **Enter**. You can press **Enter** to fill the default values. 
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_5.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}


    The CLI will prompt the initialization of the Node dependencies. Press **Y** to confirm the installation, and press **Enter** to confirm your choice. The Node modules will be installed.
\

    If you select *java8*, enter "**AlienCityAIO**" as the folder name and press **Enter**. Enter the same name "**AlienCityAIO**" as the class name of the Java function as well and press **Enter**.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_6.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

    The CLI will install the {{%badge%}}catalyst-java-sdk{{%/badge%}} on your local system and update the information in the configuration file.

{{%note%}}{{%bold class="bold-primary"%}}Note:{{%/bold%}} Ensure that you enter the package name, or class name and folder name, exactly as instructed, because the application's code contains the same names.{{%/note%}}

8. The CLI will now initiate the client set up. Enter "**ALcity**" as the name for the client package and press **Enter**. You can enter any name you need.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_init_7.jpg" class="w90" alt="alien-city-client" %}}{{%/image%}}

    The client directory will be created in the standard structure. Catalyst initialization is now complete. 

Your project directory (CATALYST_PROJECT_HOME) is now set up with the client directory (CATALYST_CLIENT_HOME) and the functions directory (CATALYST_FUNCTIONS_HOME) along with configuration files and dependencies. The project directory also contains the {{%badge%}}catalyst.json{{%/badge%}} configuration file and a hidden {{%badge%}}catalyst.rc{{%/badge%}} file. 

This is the structure of the AlienCity project's directory, if the Advanced I/O function is of the Java platform.
{{%image src="/images/tutorials/alcity/catalyst_alcity_dir_struct_java.jpg" class="w30" alt="alien-city-client" %}}{{%/image%}}

This is the structure of the AlienCity project's directory, if the Advanced I/O function is of the Node.js platform.{{%image src="/images/tutorials/alcity/catalyst_alcity_dir_struct.jpg" class="w30" alt="alien-city-client" %}}{{%/image%}}

