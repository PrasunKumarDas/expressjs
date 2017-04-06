angular.module('userModule',[])
.controller('userController',function($scope,userModel,$location,$routeParams){
	function refresh(){
		$scope.users = userModel.query();
	};
	refresh();
	$scope.addUser=function(){
		userModel.create($scope.user);
		$location.path('/users');
	}
	$scope.getUsers=function(){
		userModel.getUsers();
		//$location.path('/users');
	}
})