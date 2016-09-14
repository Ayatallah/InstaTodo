angular.module('TodoApp')
.controller('homeController', ['$scope', 'userService',function($scope, userService) {
		$scope.loggedin =(localStorage.getItem('loggedin'))=="true";
}]);