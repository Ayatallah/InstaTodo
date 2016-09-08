angular.module('TodoApp')
.controller('listController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
	
	var tempNotes = [{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/56e9b8d61d07c0923643243c/56e9b8eb1d07c09236432504/1458157966656/ReadingBunny.jpg?format=750w', 'text': 'Hello this is my task description!', 'user': 1},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/56e9b8d61d07c0923643243c/56e9b8eb1d07c09236432504/1458157966656/ReadingBunny.jpg?format=750w', 'text': "Hello this is my task description!", 'user': 1},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/56e9b8d61d07c0923643243c/56e9b8eb1d07c09236432504/1458157966656/ReadingBunny.jpg?format=750w', 'text': "Hello this is my task description!", 'user': 1},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/56e9b8d61d07c0923643243c/56e9b8eb1d07c09236432504/1458157966656/ReadingBunny.jpg?format=750w', 'text': "Hello this is my task description!", 'user': 1} ];

	localStorage.setItem('list', JSON.stringify(tempNotes));

	$scope.notes = JSON.parse(localStorage.getItem('list'));
	$scope.message = "Take Me Back Home!";

}]);