---
title: "Create a table"
description: "Create a single-page serverless web application using Catalyst Advanced I/O Function and Catalyst Data Store that allows you to report or look up alien encounters in a city."
tags : [ "Description", "Common operations", "Instance methods" ]
type: "tutorial-apps"
layout: "single"
weight: 2
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
    - name : "Data Store"
      url: "/help/data-store"
---


# Create a table

Let's now create a table in the Data Store of the *AlienCity* project. This table is used to store records of city names where aliens were sighted. 
 
To create a table:

1. Navigate to **Data Store** under *Develop*.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_data_store.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

2. Click **Create a new Table**.

3. Enter the table's name as "**AlienCity**" and click **Create**.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_create_table.jpg" class="w70" alt="alien-city-client" %}}{{%/image%}}

{{%note%}} {{%bold class="bold-primary"%}}Note:{{%/bold%}} Ensure that you enter the name exactly as instructed, because the application's code contains the same name.{{%/note%}}

The table is now created and displayed in the *Data Store* page. 

Next, let's create a column to store the names of the cities.

1. Click **New Column** in the *Schema View* section for the table.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_table_created.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}

2. Enter the column's name as "**CityName**". Select the data type as **Var Char** and enter the max length as "100". Click the **Is Unique** toggle switch to enable it.
\
{{%image src="/images/tutorials/alcity/catalyst_alcity_create_column.jpg" class="w60" alt="alien-city-client" %}}{{%/image%}}

You can learn about the various data types supported by Catalyst, as well as the other properties of a column, from the {{%link href="https://www.zoho.com/catalyst/help/data-store.html#Key_Concepts"%}}Data Store help page{{%/link%}}.


{{%note%}} {{%bold class="bold-primary"%}}Note:{{%/bold%}} Ensure that you enter the name exactly as instructed, because the application's code contains the same name.{{%/note%}}

3. Click **Create**.

The column is now created and listed in the *Schema View* section.

{{%image src="/images/tutorials/alcity/catalyst_alcity_column_created.jpg" class="w100" alt="alien-city-client" %}}{{%/image%}}
