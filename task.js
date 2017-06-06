var app = angular.module('myApp', []); 
app.controller('TaskCtrl', function($scope) {
    $scope.taskList = [{taskText:'Eat Breakfast', done:false , edit : false, filter:false   }];
	$scope.Error = false;
	
	$scope.taskAdd = function() {
		
       
		$scope.isDuplicate($scope.taskInput, function(dup){
			
			console.log(dup,$scope.taskList);
			
			if(dup) {
				$scope.Error = true;
				$scope.taskInput = "";
				
				
			}
			else
			{
				$scope.taskList.push({taskText:$scope.taskInput, done:false, edit:false , filter:false });
				$scope.taskInput = "";
			}
		});
	       
		
    };
	
	
	$scope.isDuplicate = function(inp,callback) {
		
		var len = $scope.taskList.length;
		
		var counter = 0;
		var dup = false;
		
		if ( len == 0)
			callback(false);
		else {
        angular.forEach($scope.taskList, function(x) {
			
             x.filter = false;
			 
			
			 
 			if ( x.taskText.toLowerCase() == inp.toLowerCase() ) {
				
			
				dup = true;
				
				callback(true);
				
 			}
			else {
				if ( counter == (len-1) && dup == false ) {
					
					callback(false);
				}
			} 
				counter++;
			
			
        });
	}
		
		
		
	}
	
	
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
