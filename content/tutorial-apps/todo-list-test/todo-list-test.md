

# Introduction

This tutorial will help you build a simple single-page to-do list web application in Catalyst that enables you to note
down tasks to be done, and delete them after they are done.

The client application will look like this:
![](/sites/default/files/catalyst/catalyst_todo_client.jpg)

You can access a working application and test its functioning here:
[to-do.zohocatalystapp.com](http://to-do.zohocatalystapp.com).

The to-do list application contains the following fundamental Catalyst components:

* **[Advanced I/O Function](https://www.zoho.com/catalyst/help/functions.html)**: The Advanced I/O function is coded in
the Node.js programming environment. It contains the APIs that enable the users to create, view, and delete list items
* **Client:** The front end of the application that is hosted on Catalyst through [web client
hosting](https://www.zoho.com/catalyst/help/web-client-hosting.html)

The to-do list application uses the following Catalyst features:

* **[Data Store:](https://www.zoho.com/catalyst/help/data-store.html)** To store the to-do list items in a table
* **[ZCQL:](https://www.zoho.com/catalyst/help/zcql.html)** To fetch data from the Data Store through querying

We will use the Catalyst web console and the Catalyst Command Line Interface (CLI) to build this application.

You will be given the code for the files to be included in the function and client components in this tutorial. You will
just need to copy the provided code and paste it into the appropriate files as directed.

#### Application Architecture

The to-do list application's functioning can be described as follows:

* **Adding a note:** A user enters a note in the client application and adds it as a to-do list item. The client
component triggers the Advanced I/O function. The function saves the note as a record in the table in the Catalyst Data
Store using a HTTP POST request. The Advanced I/O function then executes a HTTP GET request to obtain all the existing
records in the table and sends them back to the client for rendering. The client application displays all the existing
items in the to-do list.
* **Deleting a note:** When the user clicks on a note in the client application, it triggers a HTTP DELETE request. The
corresponding record from the Data Store is deleted. The Advanced I/O function then performs another GET request and
obtains the remaining records which is sent back to the client. This will update the to-do list displayed in the client.
![](/sites/default/files/catalyst/catalyst_todo_architecture.jpg)

# Prerequisites

Before you begin building the application, you must have the following prerequisites installed on your system:

1. **Node.js and Node Package Manager (NPM)**

The Catalyst CLI is installed through NPM. You must therefore have the NPM and Node.js installed on your system before
you install the CLI.

To check if you already have Node.js and NPM installed, execute the following commands in your terminal which display
their installed versions, if present:


```

$ node -v
```

```

$ npm -v
```
If you don't have them installed, you can download the Node.js source code or a pre-built Node installer for your
platform from their official website. Since NPM is the package manager of Node.js, installing Node.js using a Node
installer also installs NPM automatically.

[Download Node.js](https://nodejs.org/en/download/) for your platform from their official website. Refer to the [Node.js
help documentation](https://nodejs.org/en/docs/) for further information.

You can also install Node.js and NPM using a Node Version Manager (NVM). The procedure for this is explained in the [NPM
documentation](https://docs.npmjs.com/getting-started/installing-node).
2. **Any IDE tool for Node.js and client code development**

You can use any IDE to work with the function and the client code. Some popular choices include Visual Studio Code,
IntelliJ IDEA, Eclipse, and Sublime Text. Download and install an IDE of your choice in your system.

# Create a Project

Let's [create a Catalyst project](https://www.zoho.com/catalyst/help/catalyst-console.html#Creating_Project) from the
Catalyst console.

1. Log in to the [Catalyst console](https://console.catalyst.zoho.com/baas/index) and click **Create a new Project**.
![](/sites/default/files/catalyst/catalyst_todo_home_page.jpg)
2. Enter the project's name as '**ToDoList**' in the pop-up window.
![](/sites/default/files/catalyst/catalyst_todo_create_project.jpg)
3. Read and accept Catalyst's terms of service.
4. Click **Create**.

Your project will be created. You can open the project by clicking **Access Project**.
![](/sites/default/files/catalyst/catalyst_todo_access_project.jpg)

# Create a Table in the Data Store

Next, let's create a table in the Data Store of the *ToDoList* project. As discussed earlier, this table is used to
store to-do list items created by the user.

To create a table:

1. Navigate to **Data Store** under *Develop*.
![](/sites/default/files/catalyst/catalyst_todo_datastore.jpg)
2. Click **Create a new Table**.
3. Enter the table's name as '**TodoItems**' and click **Create**.
![](/sites/default/files/catalyst/catalyst_todo_create_table.jpg)

**Note:** Ensure that you enter the name exactly as instructed, because the application's code contains the same name.

The table is now created and displayed in the *Data Store* page.

Now, let's create a column in the table to store the to-do list items.

1. Click **New Column** in the *Schema View* section for the table.
![](/sites/default/files/catalyst/catalyst_todo_table_created.jpg)
2. Enter the column's name as '**Notes**'. Select the data type as **Var Char** and enter the max length as '150'. Click
the **Is Mandatory** toggle switch to enable it.
![](/sites/default/files/catalyst/catalyst_todo_create_column.jpg)
You can learn about the various data types supported by Catalyst and the other properties of a column from the [Data
Store help page](https://www.zoho.com/catalyst/help/data-store.html#Key_Concepts).

**Note:** Ensure that you enter the name exactly as instructed, because the application's code contains the same name.
3. Click **Create**.

The column is now created and listed in the *Schema View* section.
![](/sites/default/files/catalyst/catalyst_todo_column_created.jpg)

We have now configured all the necessary components from the console. We will be working on coding the application from
our local system.

# Install Catalyst CLI

Let's now set up the project directory. The first step is to install the Catalyst CLI on your local machine. Ensure that
you have installed all the [prerequisites](https://www.zoho.com/catalyst/help/tutorials/todolist/prerequisites.html).

**Note:** Skip this step if you already have Catalyst CLI installed on your system.

You can install Catalyst CLI by executing the following command in your terminal:

```

npm install -g zcatalyst-cli
```

This will initiate the installation process and your terminal will display the progress.
![](/sites/default/files/catalyst/catalyst_todo_install_cli_progress.jpg)

Once the installation is complete, you can verify if the CLI was properly installed by executing the following command:

```

$ catalyst --version 
```

If there were no issues with the installation, the command will return the version of the CLI installed on your system.

**Note:** If you are unable to install Catalyst CLI, execute the install command using sudo.

# Log in From Your CLI

You must authenticate the Catalyst CLI with your Catalyst account before using it.

**Note:** Skip this step if you are already logged in to your account.

1. Execute the following command to log in to your Catalyst account:

```

$ catalyst login
```
2. Press **Y** to allow Catalyst to collect CLI error reporting information and press **Enter**.
![](/sites/default/files/catalyst/catalyst_todo_cli_login.jpg)
You will be automatically redirected to your browser window, where the Zoho Accounts login page will open. If you are
not automatically redirected, visit the URL displayed under *Visit this URL on this device to log in*.
3. If you aren't logged in to your Zoho account, sign in using your credentials in the Zoho Accounts login page.
4. You will be redirected to a page where Catalyst CLI requests permission to access the data in your Zoho account.
Click **Accept** to provide these permissions to the CLI.
![](/sites/default/files/catalyst/catalyst_todo_cli_backend_permission_request.jpg)
5. If your login attempt is successful, you will be redirected to a screen displaying a successful Catalyst CLI login
message.
![](/sites/default/files/catalyst/catalyst_todo_cli_login_success_browser.jpg)
Close the window and continue using the CLI in your terminal.
The CLI will also display a successful login message.
![](/sites/default/files/catalyst/catalyst_todo_cli_login_success.jpg)

# Initialize the Project from the CLI

You can now begin working on your Catalyst project from the CLI. The first step is to initialize the project in an empty
directory. This will be the home directory of your project and all of the project files will be saved in it.

You can learn more about this from the [Project Directory Structure help
page](https://www.zoho.com/catalyst/help/project-directory-structure.html). You can learn about initializing a project
in detail from the [CLI help documentation](https://www.zoho.com/catalyst/help/cli-init.html).

For the to-do list application, we will initialize the client and the Advanced I/O function components.

1. Create a folder for the project on your local machine and navigate to it from the terminal.
2. Initialize a project by executing the following command from that directory:

```

$ catalyst init
```
3. Select **Client** and **Functions** using the space bar. Press the **Enter** key to initialize.
![](/sites/default/files/catalyst/catalyst_todo_init_1.jpg)
4. The CLI will now ask you to associate a Catalyst project with the directory. Associate it with the project that we
created earlier from the console. Select **ToDoList** from the list and press **Enter**.
![](/sites/default/files/catalyst/catalyst_todo_init_2.jpg)
5. The CLI will initiate the function setup. Select **AdvancedIO** as the function type.
![](/sites/default/files/catalyst/catalyst_todo_init_3.jpg)
6. Select **node10** as the function stack.
![](/sites/default/files/catalyst/catalyst_todo_init_4.jpg)
7. Enter the "to\_do\_list\_function" as the package name, "index.js" as the entry point, and your email address as the
author and press **Enter**. You can press **Enter** to fill the default values.
The CLI will prompt the initialization of the Node dependencies. Press **Y** to confirm the installation, and press
**Enter** to confirm your choice. The Node modules will be installed.
![](/sites/default/files/catalyst/catalyst_todo_init_5.jpg)

**Note:** Ensure that you enter the functions's package name exactly as instructed, because the application's code
contains the same name.
8. The CLI will initiate the client set up next. Enter "ToDoApp" as the name for the client package and press **Enter**.
You can enter any name you need.
![](/sites/default/files/catalyst/catalyst_todo_init_6.jpg)
The client directory will be created in the standard structure. Catalyst initialization is now complete.

The [client directory](https://www.zoho.com/catalyst/help/project-directory-structure.html#Client)
(CATALYST\_CLIENT\_HOME) and the [functions
directory](https://www.zoho.com/catalyst/help/project-directory-structure.html#Functions) (CATALYST\_FUNCTIONS\_HOME)
will be created in your project directory (CATALYST\_PROJECT\_HOME) with the configuration files and dependencies, along
with the [catalyst.json](https://www.zoho.com/catalyst/help/project-directory-structure.html#Catalyst_Json) and a hidden
catalyst.rc file.
![](/sites/default/files/catalyst/catalyst_todo_proj_dir_struct.jpg)

# Configure the Advanced I/O Function

Let's begin coding the to-do list application by configuring the function component.

The [functions directory](https://www.zoho.com/catalyst/help/project-directory-structure.html#Functions), in this case
functions/to\_do\_list\_function, contains:

* The index.js main function file
* The catalyst-config.json configuration file
* Node modules
* [package.json](https://docs.npmjs.com/files/package.json) and
[package-lock.json](https://docs.npmjs.com/configuring-npm/package-lock-json.html) dependency files

We will be adding code in the index.js file. We will not be modifying the code of the configuration and dependency
files.

The three APIs in index.js that handle the routing between the server and the Data Store are:

* **GET /todo:** To obtain the to-do list items from the *TodoItems* table in the Data Store
* **POST /todo:** To create and save a new list item in the Data Store
* **DELETE /todo:** To delete a list item from the Data Store

We will be coding the index.js using the [Express Node.js](https://expressjs.com/) framework. To import the Express
package in the code, you must install the Express dependencies in your system.

To install Express.js in your local machine, navigate to the function's directory (functions/to\_do\_list\_function) in
your terminal and execute the following command:

```

$ npm install express --save
```

This will install the Express module and save the dependencies.
![](/sites/default/files/catalyst/catalyst_todo_install_express.jpg)

This information will also be updated in the package.json file.
![](/sites/default/files/catalyst/catalyst_todo_package_json.jpg)

Let's code the index.js file now. You can use any IDE of your choice to work with the application's files.

**Note:** Please go through the code given in this section to make sure you fully understand it. We will discuss the
architecture of the function and the client in the next section.

Copy the code given below and paste it in index.js located in functions/to\_do\_list\_function directory and save the
file.

* #### View code for index.js

```javascript

Copied


var express = require('express');
var app = express();
app.use(express.json()); // This supports the JSON encoded bodies
var catalyst = require('zcatalyst-sdk-node');

//The GET API gets data from the TodoItems table in the Data Store
app.get('/todo', function (req, res) {
var catalystApp = catalyst.initialize(req);
var data = [];
getToDoListFromDataStore(catalystApp).then(
notes => {
var html = "";
notes.forEach(element => {
//Creates a HTML for the list of items retrieved from the Data Store
html = html.concat('<li value="' + element.TodoItems.ROWID + '">' + element.TodoItems.Notes + '</li>');
});
res.send(html); //Sends the HTML data back to the client for rendering
}
).catch(err => {
console.log(err);
sendErrorResponse(res);
})
});

//The POST API sends data to persist in the TodoItems table in the Data Store
app.post('/todo', function (req, res) {
console.log(req.body);
var catalystApp = catalyst.initialize(req);
var datastore = catalystApp.datastore();
var table = datastore.table('TodoItems');
var notesVal = req.body.item;
var rowData = {}
rowData["Notes"] = notesVal;
var insertPromise = table.insertRow(rowData);
insertPromise.then((row) => {
res.redirect(req.get('referer')); //Reloads the page again after a successful insert
}).catch(err => {
console.log(err);
sendErrorResponse(res);
});
});

//The DELETE API deletes the selected items from the Data Store
app.delete('/todo:item', function (req, res) {
var id = req.params.item;
var catalystApp = catalyst.initialize(req);
let datastore = catalystApp.datastore();
let table = datastore.table('TodoItems');
let rowPromise = table.deleteRow(id);
rowPromise.then((row) => {
res.send(id);
}).catch(err => {
console.log(err);
sendErrorResponse(res);
});
});

//This function executes the ZCQL query to retrieve items from the Data Store
function getToDoListFromDataStore(catalystApp) {
return new Promise((resolve, reject) => {
// Queries the table in the Data Store
catalystApp.zcql().executeZCQLQuery("Select * from TodoItems order by createdtime").then(queryResponse => {
resolve(queryResponse);
}).catch(err => {
reject(err);
})
});
}

/**
* Sends an error response
* @param {*} res
*/
function sendErrorResponse(res) {
res.status(500);
res.send({
"error": "Internal server error occurred. Please try again in some time."
});
}

module.exports = app;
```

The functions directory is now configured.

# Configure the Client

Now, let's configure the client component. The [client
directory](https://www.zoho.com/catalyst/help/project-directory-structure.html#Client) contains:

* The index.html file that contains the HTML code for the front-end application
* The main.css file that contains the CSS code for the front-end application
* The main.js file that contains the JavaScript code
* The client-package.json configuration file

We will be coding index.html, main.css, and main.js.

**Note:** Please go through the code given in this section to make sure you fully understand it.

Copy the code given below and paste it in index.html located in client/ directory using an IDE and save the file.

* #### View code for index.html

```

Copied


<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>ToDoApp</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" media="screen" href="main.css" />
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="main.js"></script>
</head>

<body>
	<div id="to-do-list-div">
		<form onSubmit="return false;" method="POST">
			<input type="text" id="item" name="item" placeholder="Add a new task.." required />
			<input type="submit" value="Add Task" />
        </form>
			<ul></ul>
	</div>
</body>

</html>
```

Copy the code given below and paste it in main.css located in client/ directory and save the file.

* #### View code for main.css

```

Copied


html, body {
height: 100%;
}
.full-height {
height: 100%;
}

body{
background: #fefefe;
font-family: Arial;
color: #000000;
min-height: 100%;
}

#to-do-list-div{
position: relative;
width: 95%;
background: #dddddd;
margin: 0 auto;
padding: 20px;
box-sizing: border-box;
}

#to-do-list-div form:after{
margin: 0;
content: '';
display: block;
clear: both;
}

input[type="text"]{
width: 70%;
padding: 20px;
background:#f5f4f4;
border: 0;
float: left;
font-size: 20px;
color: #0b0b0b;
}

input[type="submit"]{
padding: 20px;
width: 25%;
float: left;
background: #a4a2a2;
border: 0;
box-sizing: border-box;
color: rgb(26, 26, 26);
cursor: pointer;
font-size: 20px;
}

ul{
list-style-type: none;
padding: 0;
margin: 0;
}

li{
width: 100%;
padding: 20px;
box-sizing: border-box;
font-family: arial;
font-size: 20px;
cursor: pointer;
letter-spacing: 1px;
}

li:hover{
text-decoration: line-through;
background: rgba(0,0,0,0.2);
}
```

Copy the code given below and paste it in main.js located in client/ directory and save the file.

* #### main.js

```

Copied


$(document).ready(function(){

//Fires the GET API defined in the function on page load
// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
$.ajax({
type: 'GET',
url: '/server/to_do_list_function/todo', //Ensure that 'to_do_list_function' is the package name of your function
async: false,
success: function(html){
//Appends the items to the HTML from the server on success
$("#to-do-list-div ul").append(html);
}
});

//Fires the POST API defined in the function
// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
$('form').on('submit', function(){
var itemVal= $("#item").val();
var todo= {item:itemVal};
$.ajax({
type: 'POST',
contentType: "application/json; charset=utf-8",
url: '/server/to_do_list_function/todo', //Ensure that 'to_do_list_function' is the package name of your function
data: JSON.stringify(todo),
success: function(data){
location.reload(); //Reloads the page on success
}
});
return false;
});

//Fires the DELETE API on the delete button's click
// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
$(document).on("click","#to-do-list-div ul li",function()
{
var itemRowId = $(this).attr("value"); //The item is deleted using the attribute "value" which indicates the ROWID of
the record in the Data Store
$.ajax({
type: 'DELETE',
url: '/server/to_do_list_function/todo' + itemRowId, //Appends the ROWID along with the URL
//Ensure that 'to_do_list_function' is the package name of your function
success: function(data){
location.reload(); //Reloads the page on success
}
});
return false;
});
});
```

The client directory is now configured.

Let's quickly go over the working of the function and the client code:

1. **POST operation**

* When the user enters a to-do list item in the app and saves it, the submit event associated with the **Add Task**
button triggers an Ajax call to the POST API.
* The main.js in the client handles the Ajax operation and the URL, and it calls the POST API defined in the index.js
function file.
* The POST API defined in index.js inserts the data as a record in the *TodoItems* table in the Data Store. The list
item is inserted as the value of the Notes column.
* After a record insertion is done, a reload event loads the client app on success.
2. **GET operation**

* The reload event triggers an Ajax call to the GET API. The URL and the Ajax operation are handled in main.js.
* The GET API defined in index.js triggers the getToDoListFromDataStore function that obtains all the records the Data
Store by executing a ZCQL query.
* The GET API then creates a HTML for the list items retrieved from the Data Store and sends the HTML back to the client
for rendering.
* The main.js appends this HTML obtained from the function and displays on page reload.
3. **DELETE operation**

* When the user clicks on a list item in the client app, the DELETE API is triggered.
* The main.js handles the Ajax call to the DELETE API and the item is deleted by referring to the ROWID of the record in
the Data Store.
* The DELETE API defined in index.js then executes the delete operation for the record in the *TodoItems* table matching
the ROWID and sends the response back to the client.
* The main.js reloads the client app upon a successful delete operation, and displays the updated data in the client.

# Test the application

Before you deploy the application to the remote console, you can test the application on a local server and check if
everything works fine using the Catalyst CLI. For detailed information on catalyst serve, refer to the [Serve Resources
help page](https://www.zoho.com/catalyst/help/cli-serve.html).

To serve the Catalyst project locally, execute the following command from your project directory
(CATALYST\_PROJECT\_HOME):

```

$ catalyst serve
```

The to-do list application will now be served at default port 3000. The local endpoint URLs of the components are
displayed.

**Note:** Every time you access the homepage or any of the sub-pages of your client, or the function, the CLI will
display a live log of the URL accessed, along with the HTTP method that is used to access it.
![](/sites/default/files/catalyst/catalyst_todo_serve.jpg)

You can now open the client component's local URL in a browser to access the application.
![](/sites/default/files/catalyst/catalyst_todo_test_1.jpg)

Let's test the application by adding a task in the to-do list. Enter a task and click **Add Task**.
![](/sites/default/files/catalyst/catalyst_todo_test_2.jpg)

The task will be added and displayed in the app.
![](/sites/default/files/catalyst/catalyst_todo_test_3.jpg)

Let's verify this. Open the *TodoItems* table in the **Data Store** from your Catalyst console. Click the **Data View**
tab to view the record. A row will be created for the list item that was added.
![](/sites/default/files/catalyst/catalyst_todo_test_4.jpg)

Let's add a few more tasks in the to-do list app. We can now test the delete operation. Click on a task that you want to
delete.
![](/sites/default/files/catalyst/catalyst_todo_test_5.jpg)

When you click on a task, the delete operation is executed automatically and it will be removed from the list. The app
displays the updated list.
![](/sites/default/files/catalyst/catalyst_todo_test_6.jpg)

Let's verify if the record was deleted in the Data Store. Open the ***TodoItems*** table in the **Data Store** and click
**Data View** to view the records. The row for the list item will be deleted from the table.
![](/sites/default/files/catalyst/catalyst_todo_test_7.jpg)

If this setup is working correctly, we can deploy the application to production.

# Deploy the Project

To [deploy your Catalyst project](https://www.zoho.com/catalyst/help/cli-deploy.html) from the CLI, run the following
command in your terminal from your project directory:

```

$ catalyst deploy
```

The function is deployed first, followed by the client component. The production URLs of the components are displayed.
![](/sites/default/files/catalyst/catalyst_todo_deploy.jpg)

You can now open the client component's URL in a browser to access the deployed application. The to-do list application
can now be accessed from its [web app URL](https://www.zoho.com/catalyst/help/web-client-hosting.html#Implementation).
![](/sites/default/files/catalyst/catalyst_todo_client.jpg)

The to-do list application is now functional and will work without any errors.