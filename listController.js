angular.module('TodoApp').controller('listController', ['$scope', function($scope) {
	
	var tempNotes = [];
	if (localStorage.getItem('list') === null) {
	tempNotes = [{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/55807865e4b00ba43eb7d2bf/5580787ce4b00ba43eb7d37b/1436924373579/Roboticons-Finished4.jpg?format=750w', 'text': 'Meditate.','username':'yoyo' ,'done': false},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/t/55807b11e4b0ca06a04bdd19/1434483513650/Horrific-Love-Finished1.jpg?format=300w', 'text': "Enjoy doing nothing!",'username':'yoyo' ,'done': false},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/t/558c02fae4b0d78cd28b0103/1435239215385/sweet-dreams?format=1000w', 'text': "Have some sleep",'username':'yoyo' ,'done': false},
	{'url': 'http://static1.squarespace.com/static/528fc8ffe4b070ad8ee97493/55807af2e4b00fe7c179ce45/55807ea9e4b01ec06cf76e3c/1436924264994/Horrific-Love-Finished7.jpg?format=750w', 'text': "Pet's time",'username':'yoyo' ,'done': false} ];

	localStorage.setItem('list', JSON.stringify(tempNotes));

	}
	else{
		tempNotes = JSON.parse(localStorage.getItem('list'));
	}

	//if (lists == null) 
	//$scope.notes = (JSON.parse(localStorage.getItem('list'))).filter(function(note){
	//	return !note.done;
	//});
	//};
	//$scope.notes = lists;
	var user =JSON.parse(localStorage.getItem('currentUser'));
	$scope.notes = JSON.parse(localStorage.getItem('list')).filter(function(note){
		return note.username == user;
	});
	$scope.message = "Take Me Back Home!";
	//$scope.message2 = user;
	document.getElementById('todoItemText').focus();
	document.getElementById('todoItemUrl').focus();

	$scope.createTodo = function(){
		$scope.notes.push({'url': $scope.itemUrl, 'text': $scope.itemText,'username':user ,'done': false});
		tempNotes.push({'url': $scope.itemUrl, 'text': $scope.itemText,'username':user ,'done': false});
		//lists.push({'photo': $scope.itemUrl, 'text': $scope.itemText,'username':'yoyo' ,'done': false});
		//$scope.notes.unshift({'url': $scope.itemUrl, 'text': $scope.itemText,'username':'yoyo' ,'done': false});
		localStorage.setItem('list', JSON.stringify(tempNotes));
		$scope.itemUrl ="";
		$scope.itemText ="";
	};

	$scope.updateTodos = function(){
	$scope.notes = ($scope.notes).filter(function(note){
		return !note.done;
	});
	//localStorage.setItem('list', JSON.stringify($scope.notes));
	};
}]);