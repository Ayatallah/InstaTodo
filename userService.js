angular.module('TodoApp')
.service('userService', function() {
  this.loggedin = false;
  this.username = '';
  this.setLoggedin = function() { this.loggedin = true; };
  this.resetLoggedin = function() { this.loggedin = false}; 
  this.getLoggedin = function() { return this.loggedin; };
  this.setCurrentUser = function(username) { this.username = username; };
  this.resetCurrentUser = function() { this.username = null; };
  this.getCurrentUser = function(){ return this.username;};
});