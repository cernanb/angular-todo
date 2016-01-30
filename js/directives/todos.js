angular.module('todoList')
.directive('todos', function(){
	return {
		templateUrl: 'templates/todos.html',
		controller: 'mainCtrl'
	}
});