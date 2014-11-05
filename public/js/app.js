angular.module("myApp", [])
.controller('mainCtrl', function($scope){
	$scope.books = [
		{title: 'AAA', price: 200},
		{title: 'BBB', price: 300},
		{title: 'CCC', price: 400}
	];
 })
