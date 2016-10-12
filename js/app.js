var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			controller: "ScrollController",
			templateUrl: "views/header.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});