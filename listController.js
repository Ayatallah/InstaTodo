angular.module('TodoApp')
.controller('listController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
	
	var tempNotes = [{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/55807865e4b00ba43eb7d2bf/5580787ce4b00ba43eb7d37b/1436924373579/Roboticons-Finished4.jpg?format=750w', 'text': 'Meditate.','username':'yoyo' ,'done': false},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/t/55807b11e4b0ca06a04bdd19/1434483513650/Horrific-Love-Finished1.jpg?format=300w', 'text': "Enjoy doing nothing!",'username':'yoyo' ,'done': false},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/t/558c02fae4b0d78cd28b0103/1435239215385/sweet-dreams?format=1000w', 'text': "Have some sleep",'username':'yoyo' ,'done': false},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/55807af2e4b00fe7c179ce45/55807ea9e4b01ec06cf76e3c/1436924264994/Horrific-Love-Finished7.jpg?format=750w', 'text': "Pet's time",'username':'yoyo' ,'done': false} ];

	sessionStorage.setItem('list', JSON.stringify(tempNotes));

	$scope.notes = (JSON.parse(sessionStorage.getItem('list'))).filter(function(note){
		return !note.done;
	});
	$scope.message = "Take Me Back Home!";

	document.getElementById('todoItemText').focus();
	document.getElementById('todoItemUrl').focus();

	$scope.createTodo = function(){
		$scope.notes.push({'url': $scope.itemUrl, 'text': $scope.itemText,'username':'yoyo' ,'done': false});
		sessionStorage.setItem('list', JSON.stringify($scope.notes));
		$scope.itemUrl ="";
		$scope.itemText ="";
	};

	$scope.updateTodos = function(){
	$scope.notes = ($scope.notes).filter(function(note){
		return !note.done;
	});
	sessionStorage.setItem('list', JSON.stringify($scope.notes));
	};


}]);