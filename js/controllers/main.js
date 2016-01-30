//this file serves as the main controller for my todoList app
//this file uses the functions created in the services folder via the data.js file

'use strict';

angular.module('todoList')
.controller('mainCtrl', function($scope, dataService){

	$scope.addTodo = function(){
		var todo = {name: "Enter task here..."};
		$scope.todos.unshift(todo);
	}

	dataService.getTodos(function(res){
		console.log(res.data);
		$scope.todos = res.data;
	});

	$scope.deleteTodo = function(todo, $index) {
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	}

	//function to save all todos regardless of which save button is clicked
	$scope.saveTodos = function() {
			//filters all todos that were edited so they can be saved when save button is clicked
		 var fileteredTodos = $scope.todos.filter(function(todo){ 
			if (todo.edited) {
				return todo;
			}
		});
		dataService.saveTodos(fileteredTodos);
	}
	
})