'use strict';
var app=angular
.module('mongooseApp',['ngRoute','ngResource','homeModule','userModule'])
.constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: '',
	   	IMAGEURL: '',
	    

	})


app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'views/home.html',
			controller:'homeController'
		})

		.when('/users',{
			templateUrl:'views/users.html',
			controller:'userController'
		})
		.when('/addUser',{
			templateUrl:'views/addUser.html',
			controller:'userController'
		})
	    .otherwise({
				redirectTo:'/'
			});

	}]);

