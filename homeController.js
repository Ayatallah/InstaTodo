angular.module('TodoApp')
.controller('homeController', ['$scope', 'userService',function($scope, userService) {
	//$scope.message = userService.getLoggedin();
	//$scope.message = "Take me to Notes!";
	//if ((localStorage.getItem('currentUser')) === null) {
		//$scope.message = "bgbg";
		//localStorage.setItem('loggedin', JSON.stringify(false));
		//localStorage.removeItem('loggedin');
		$scope.loggedin =(localStorage.getItem('loggedin'))=="true";
		$scope.message1 = (localStorage.getItem('loggedin'));
		$scope.message = $scope.loggedin;
		$scope.message2 = (localStorage.getItem('loggedin'));
	//}
	//else{
	//	$scope.loggedin = true;
	//}
	//if (userService.getLoggedin()==true) {
	//	$scope.message = userService.getCurrentUser();
	//};
	
}]);