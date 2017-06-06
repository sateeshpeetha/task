var app = angular.module('myApp', []); 
app.controller('TaskCtrl', function($scope) {
    $scope.taskList = [{taskText:'Eat Breakfast', done:false , edit : false}];

    $scope.taskAdd = function() {
        $scope.taskList.push({taskText:$scope.taskInput, done:false, edit:false});
	   
        $scope.taskInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function(x) {
			
            if (!x.done) $scope.taskList.push(x);
        });
    };
	
	$scope.edit = function() {
		
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function(x) {
			
            if (x.done) {  $scope.taskList.push(x);
			x.edit = true;
			}
			
			if (!x.done) $scope.taskList.push(x);
			
        });
       
    };
	
	$scope.selectAll = function(checkbox) {
		
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function(x) {
			
			x.done = checkbox.masterSelect;
			
            $scope.taskList.push(x);
			
        });
       
    };
	
	$scope.editUpdate = function(task) {
		
      
        
		if ( event.which == 13 ) {
			
	        var oldList = $scope.taskList;
	        $scope.taskList = [];
			
			  angular.forEach(oldList, function(x) {
			
				  if (task.x.$$hashKey == x.$$hashKey ) {
					
					  x.taskText = task.x.taskText;
					  x.edit     = false;
					  x.done     = false;
				  	$scope.taskList.push(x);
					
				  }
				  else $scope.taskList.push(x);
		
		  });
			
		}
       
    };
   
});
