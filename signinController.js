angular.module('TodoApp')
.controller('signinController', ['$scope','$state','$rootScope',  'userService',function($scope,$state, $rootScope,userService) {
	
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

	$scope.login = function() {
		for (var i = tempUsers.length - 1; i >= 0; i--) {
			if(tempUsers[i].username == $scope.username && tempUsers[i].password ==$scope.password){
				found = true;
				break;
			}
		};
		
		if (found) {
			//userService.setLoggedin();
			//userService.setCurrentUser($scope.username);
			localStorage.setItem('currentUser', JSON.stringify($scope.username));
			localStorage.setItem('loggedin', JSON.stringify(true));
			$state.go('home');
		};
	};

	$rootScope.logout = function(){
		localStorage.removeItem('currentUser');
		localStorage.removeItem('loggedin');
		if ($state.is('home')) {
			$state.reload();
		}
		else{
			$state.go('home');
		}
		
		//userService.resetLoggedin();
		//userService.resetCurrentUser();
	}
	//if (userService.getLoggedin()) {
		//$scope.message = userService.getCurrentUser();
	//};
	
}]);