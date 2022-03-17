---
title: "Overview"
description: "Node.js SDK Overview"
tags : [ "Description", "Common operations", "Instance methods" ]
type: "sdk"
layout: "single"
linkTitle : "nodejsv3"
weight: 1
version:
  current_version: "v3"
  version_item:
    - name : "v1"
      url: "/sdk/nodejs/v1/overview/"
    - name : "v2"
      url: "/sdk/nodejs/v2/overview/"
    - name : "v3"
      url: "/sdk/nodejs/v3/overview/"
---


# Node JS SDK - Overview

Node JS SDk has all the necessary methods to access the Catalyst Components and services. It allows you to declare and define Catalyst components whose behavior are predefined. For example, each Catalyst component has its equivalent NodeJS object in SDK and API equivalents are called methods in NodeJS.

## Include Catalyst SDK in Project

If you choose **install dependencies** option in the CLI while initializing the Catalyst project, the node.js SDK will automatically be included in the generated sample boilerplate code. However, you can include it in your project, by executing the following command from the CATALYST_PROJECT_HOME directory in the CLI.

{{%code%}}npm install --save zcatalyst-sdk-node{{%/code%}}

## Initialize the SDK

Catalyst Node.js SDK must be initialized which would return an object. You can access the catalyst components of the current project thrugh this returned object. The different initialization methods for different type of functions are as given below.


{{% panel_with_adjustment header="SDK Initialization in Advanced I/O Functions with the Basic Template" footer="button" %}}
var catalyst = require('zcatalyst-sdk-node');
module.exports = (req, res) => {	
    var app = catalyst.initialize(req); 
//This app variable is used to access the catalyst components.
//You can refer the SDK docs for code samples.
//Your business logic comes here
}
{{% /panel_with_adjustment %}}

<br>

{{% panel_with_adjustment header="SDK Initialization in Advanced I/O Functions with Express.js" footer="button" %}}
const expressApp = express();
var catalyst = require('zcatalyst-sdk-node');
const express = require('express');
expressApp.get('/',(req,res)=>{
	var app = catalyst.initialize(req); 
//This app variable is used to access the catalyst components.
//You can refer the SDK docs for code samples.
//Your business logic comes here
});
module.exports=expressApp;
{{% /panel_with_adjustment %}}

<br>

{{% panel_with_adjustment header="SDK Initialization in BasicIO Functions" footer="button" %}}
const catalyst = require('zcatalyst-sdk-node');
module.exports = (context, basicIO) => {
const app = catalyst.initialize(context);
//This app variable is used to access the catalyst components.
//You can refer the SDK docs for code samples.
//Your business logic comes here
}
{{% /panel_with_adjustment %}}

<br>

{{% panel_with_adjustment header="SDK Initialization in Event Functions" footer="button" %}}
const catalyst = require('zcatalyst-sdk-node');
module.exports = (event, context) => {
const app = catalyst.initialize(context);
//This app variable is used to access the catalyst components.
//You can refer the SDK docs for code samples.
//Your business logic comes here
}
{{% /panel_with_adjustment %}}

<br>

{{% panel_with_adjustment header="SDK Intialization in Cron Functions" footer="button" %}}
const catalyst = require('zcatalyst-sdk-node');
module.exports = (cronDetails, context) => {
const app = catalyst.initialize(context);
//This app variable is used to access the catalyst components.
//You can refer the SDK docs for code samples.
//Your business logic comes here
}
{{% /panel_with_adjustment %}}

<br>

Now you can access the components using the initialized variable.
