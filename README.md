# Task
## Task Example

Single page App to manage (add, delete, update, and list) tasks. No persistent storage or server API implemented. UI template is best suits chrome, firefox, and IE 9+. Can be extended to include device specific template. This is single page app. No routes or server API implemented.


### Checkout the live demo here:  https://sateeshpeetha.github.io/task/

### Original requirements here :  https://sateeshpeetha.github.io/task/Requirements.pdf

### This app depends on three open source libraries mentioned below.
#### Jquery,Bootstrap, AngularJS which provides abstractions(CSS and Javascript) for rapid prototyping and development.

### Instruction to use it in your app.
### Just download the task.html and task.js files. Example shown below.

#### add links to external libraries in the header section. Bootsrap and Jquery may not be required for this app. CSS can be messy sometimes when used in different devices.

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous">
  </script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>`

#### add task-ct tag to your app.
`<task-ct></task-ct>`
####  add script tag.
` <script src="task.js"></script>`


## High Level App Overview

<img src="https://sateeshpeetha.github.io/task/APP.jpg">
</img>


#### Sample Screen shots below.


<img src="https://sateeshpeetha.github.io/task/ss1.jpg">
</img>

<img src="https://sateeshpeetha.github.io/task/ss2.jpg">
</img>

<img src="https://sateeshpeetha.github.io/task/ss3.jpg">
</img>

<img src="https://sateeshpeetha.github.io/task/sc4.jpg">
</img>


### Simple Angular JS single page APP.

One controler TaskCtrl.

Functionality.

User can add new task. While adding list will be updated with matching tasks dynamically. Duplicate tasks are not added and warning alert will be displayed.

User can edit single or multiple tasks using inline edit.

User can select multiple or all tasks and perform either delete or update operations.


