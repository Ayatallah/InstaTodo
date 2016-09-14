angular.module('TodoApp')
.controller('homeController', ['$scope', 'userService',function($s
		$scope.loggedin =(localStorage.getItem('loggedin'))=="true";
}]);