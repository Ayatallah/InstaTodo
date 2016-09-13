angular.module('TodoApp')
.controller('signinController', ['$scope','$state','$rootScope',  'userService',function($scope,$state, $rootScope,userService) {
	//localStorage.setItem('users', JSON.stringify([{'username': 'yoyo', 'password':'hahayoyo5'}]));
	//$scope.message = "Take me back home!";
	var tempUsers = []
	if (localStorage.getItem('users') === null) {
		tempUsers = [{'username': 'yoyo', 'password':'hahayoyo5'} ];
		localStorage.setItem('users', JSON.stringify(tempUsers));
	}
	else{
		tempUsers = JSON.parse(localStorage.getItem('users'));
	}

	document.getElementById('username').focus();
	document.getElementById('password').focus();
	//$scope.message = "hello";
	var found;

	$scope.login = function() {
		for (var i = tempUsers.length - 1; i >= 0; i--) {
			if(tempUsers[i].username == $scope.username && tempUsers[i].password ==$scope.password){
				found = true;
				break;
			}
		};
		
		if (found) {
			//$scope.message = "hey";
			//userService.setLoggedin();
			//userService.setCurrentUser($scope.username);
			localStorage.setItem('currentUser', JSON.stringify($scope.username));
			$state.go('home');
		};
	};

	$rootScope.logout = function(){
		localStorage.removeItem('currentUser');
		$state.reload();
		//userService.resetLoggedin();
		//userService.resetCurrentUser();
	}
	//if (userService.getLoggedin()) {
		//$scope.message = userService.getCurrentUser();
	//};
	
}]);