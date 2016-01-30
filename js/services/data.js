// this files contains services that will allow the app to use certain functions 
// and values that can be passed across the application
'use strict';

angular.module('todoList')
.service('dataService', function($http){

	this.helloConsole = function() {
		console.log('This is the hello console service!');
	}

	//using HTTP req to GET the todos from the 'database'
	this.getTodos = function(callback) { 
		$http.get('../data/todos.json')
		.then(callback)	
	}

	this.deleteTodo = function(todo) {
		console.log('The ' + todo.name + ' has been deleted!');
	}

	this.saveTodos = function(todos) {
		console.log(todos.length + ' todos have been saved!');
	}

});