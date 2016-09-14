angular.module('TodoApp')
.controller('signupController', ['$scope','$state','$rootScope',  'userService',function($scope,$state, $rootScope,userService) {
	
	var tempUsers = [];
	if (localStorage.getItem('users') === null) {
		tempUsers = [{'username': 'yoyo', 'password':'hahayoyo5'},{'username': 'ahmoda', 'password':'hahaahmoda5'} ];
		localStorage.setItem('users', JSON.stringify(tempUsers));
	}
	else{
		tempUsers = JSON.parse(localStorage.getItem('users'));
	}

	document.getElementById('username').focus();
	document.getElementById('password').focus();
	var found;

	$scope.register = function() {
		tempUsers.push({'username':$scope.username, 'password':$scope.password});
		localStorage.setItem('users', JSON.stringify(tempUsers));
		$state.go('signin');		
	};


	
}]);