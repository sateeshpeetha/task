// Module: task controller app using angular js. You need to keep this to use it in your app as per licence agreement.
// Author Sateesh Peetha
// BLog: http://tech.dingg.org
// Connect with me on LinkedIn at https://www.linkedin.com/in/sateeshpeetha/
// or at angel.co here https://angel.co/sateesh-peetha

var app = angular.module('myApp', []);

//app.controller('TaskCtrl', 

function TaskCtrl($scope, $element, $attrs) {
  $scope.taskList = [{
    taskText: 'Eat Breakfast',
    done: false,
    edit: false
  }];
  $scope.Error = false;

  $scope.taskAdd = function() {

    $scope.isDuplicate($scope.taskInput, function(dup) {

      if (dup) {
        $scope.Error = true;
        $scope.taskInput = "";

      } else {
        $scope.taskList.push({
          taskText: $scope.taskInput,
          done: false,
          edit: false
        });
        $scope.taskInput = "";
      }
    });


  }; // end of taskAdd


  $scope.isDuplicate = function(inp, callback) {

      var len = $scope.taskList.length;

      var counter = 0;
      var dup = false;

      if (len === 0)
        callback(false);
      else {
        angular.forEach($scope.taskList, function(l) {

          if (l.taskText.toLowerCase() == inp.toLowerCase()) {
            dup = true;
            callback(true);

          } else {
            if (counter == (len - 1) && dup === false) {

              callback(false);
            }
          }
          counter++;

        });
      }



    }; // end of Is Duplicate


  $scope.isUpdDuplicate = function(inp, callback) {

      var len = $scope.taskList.length;

      var counter = 0;
      var dup = false;

      if (len === 0)
        callback(false);
      else {
        angular.forEach($scope.taskList, function(l) {

     

          if ((l.taskText.toLowerCase() == inp.taskText.toLowerCase()) && (l.$$hashKey != inp.$$hashKey)) {

            dup = true;
            callback(true);

          } else {
            if (counter == (len - 1) && dup === false) {

              callback(false);
            }
          }
          counter++;


        });
      }



    }; // end of Is update Duplicate



  $scope.remove = function() {
    var oldList = $scope.taskList;
    $scope.taskList = [];
    angular.forEach(oldList, function(x) {

      if (!x.done) $scope.taskList.push(x);
    });
    $scope.masterSelect = false;
  }; // end of remove

  $scope.edit = function() {

    var oldList = $scope.taskList;
    $scope.taskList = [];
    angular.forEach(oldList, function(x) {

      if (x.done) {
        $scope.taskList.push(x);
        x.edit = true;
        x.old = x.taskText;
      }

      if (!x.done) $scope.taskList.push(x);

    });

  }; // end of edit

  $scope.selectAll = function(checkbox) {

    var oldList = $scope.taskList;
    $scope.taskList = [];
    angular.forEach(oldList, function(x) {

      x.done = checkbox.masterSelect;

      $scope.taskList.push(x);

    });

  }; // end of  update checkboxes

  $scope.editUpdate = function(task) {


    if (event.which == 13 && task.x.taskText !== "") {
      $scope.isUpdDuplicate(task.x, function(dup) {

        if (dup) {
          $scope.Error = true;
          $scope.taskInput = "";

        } else {
          task.x.edit = false;
          task.x.done = false;
          $scope.Error = false;
        }
      });
      $scope.masterSelect = false;

    }

    if (task.x.taskText === "") {

      $scope.Error = true;
    }
  }; // end of inline edit.

}

//);


app.component('taskCt', {

  templateUrl: 'task.html',
  controller: TaskCtrl

});
