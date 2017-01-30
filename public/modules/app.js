(function(){
	var app=angular.module('myApp',[]);
	app.controller('AppCtrl',['$scope','$http','$window',function($scope,$http,$window){
		console.log("Hello from register!");
		$scope.flag=false;
		$scope.studentList=[];
		$scope.submitData=function(){
			console.log($scope.student);
			$http.post('/studentslist',$scope.student).then(function(response){
				console.log(response);
				$window.alert("Submission successful!");
			},function(){
				console.log("ERROR: register");
			});
		}

		$scope.showData=function(){
			console.log("hi");
			if($scope.flag==false){
				
				$http.get('/studentslist').then(function(response){
				console.log($scope.flag);
				$scope.studentList=response.data;	
				$scope.flag=true;		
				},function(){
					console.log("ERROR: show");
					});
			}
			else{
				$scope.flag=false;
			}
		}
	}]);	
})();