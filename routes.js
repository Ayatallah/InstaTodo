angular.module('TodoApp', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url: '/',
		templateUrl: 'welcome.html',
		controller: 'homeController'
	})

	.state('list',{
		url: '/list',
		templateUrl: 'list.html',
		controller: 'listController'
	})

	.state('signup',{
		url: '/signup',
		templateUrl: 'signup.html',
		controller: 'signupController'
	})

	.state('signin',{
		url: '/signin',
		templateUrl: 'signin.html',
		controller: 'signinController'
	});

}]);