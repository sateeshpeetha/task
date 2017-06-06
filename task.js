var app = angular.module('myApp', []); 
app.controller('TaskCtrl', function($scope) {
    $scope.taskList = [{taskText:'Eat Breakfast', done:false , edit : false, filter:false }];
	$scope.Error = false;

    $scope.taskAdd = function() {
		
        var oldList = $scope.taskList;
        $scope.taskList = [];
		
		
		oldList.push({taskText:$scope.taskInput, done:false, edit:false , filter:false });
		
		
		
        angular.forEach(oldList, function(x) {
			
             x.filter = false;
			
		
			 
 			if ( x.taskText.toLowerCase() == $scope.taskInput.toLowerCase() ) {
 				
				if ( x.taskText == $scope.taskInput ) {
					$scope.taskInput = "";
					$scope.Error = true;
					
				}
				else  $scope.taskList.push(x);
				
				
 			}
			else {
				 $scope.taskList.push(x);
			}
			
        });
		
	
		
		
		
    };
	
	
	
	$scope.addNew = function(task) {
		
    		
	        var oldList = $scope.taskList;
	        $scope.taskList = [];
			
			  angular.forEach(oldList, function(x) {
				  
			
				  if ( task.taskInput.toLowerCase() == (x.taskText.substr(0,task.taskInput.length)).toLowerCase() ) {
					  
					  x.filter = false;
				  	  $scope.taskList.push(x); 
				  }	 
				  else {
				  	
					  x.filter = true;
					  $scope.taskList.push(x); 
				  }
				  
		
		  });
		  
		}
       
   
    $scope.remove = function() {
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function(x) {
			
            if (!x.done) $scope.taskList.push(x);
        });
		$scope.masterSelect = false;
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
		
		$scope.masterSelect = false;
       
    };
   
});
