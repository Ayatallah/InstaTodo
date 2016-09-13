angular.module('TodoApp')
.controller('homeController', ['$scope', 'userService',function($scope, userService) {
	//$scope.message = userService.getLoggedin();
	$scope.message = "Take me to Notes!";
	if ((localStorage.getItem('currentUser')) === null) {
		$scope.message = "bgbg";
	};
	//if (userService.getLoggedin()==true) {
	//	$scope.message = userService.getCurrentUser();
	//};
	
}]);