# Task
## Task Example

Single page App to manage (add, delete, update, and list) tasks. No persistent storage or server API implemented. UI template best suits chrome, firefox, and IE 9+. Can be extended to include device specific template. This is single page app. No routes or server API implemented.


### Checkout the live demo here:  https://sateeshpeetha.github.io/task/

### Original requirements here :  https://sateeshpeetha.github.io/task/Requirements.pdf

### This app depends on three open source libraries mentioned below.
#### Jquery,Bootstrap, AngularJS which provides abstractions(CSS and Javascript) for rapid prototyping and development.

### Instruction to use it in your app.
### Just download the task.html and task.js files. Example shown below.

#### add links to external libraries in the header section. Bootsrap and Jquery may not be required for this app. CSS can be messy sometimes when used in different devices.

#### bootstrap css file
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">`
#### jquery
`<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>`
#### bootstrap js file
`<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>`
#### Angular JS
`<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>`

#### add task-ct tag to your app.
`<task-ct></task-ct>`
##### or you can include in other html tags like div, p, span etc as shown below.
`<div task-ct></div>`
###### or
`<p task-ct></p>`

####  add script tag.
` <script src="task.js"></script>`


## High Level App Overview

#### Component: taskCt which translates into html tag `<task-ct>`
#### Controller: TaskCtl
#### Template task.html

<img src="https://sateeshpeetha.github.io/task/APPD.jpg">
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




## Functionality.

User can add new task. While adding list will be updated with matching tasks dynamically(implicit search functionality). Duplicate tasks are not added and warning alert will be displayed.

User can edit single or multiple tasks using inline edit.

User can select multiple or all tasks and perform either delete or update operations.


