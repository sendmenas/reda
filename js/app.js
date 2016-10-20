var app = angular.module("app", ["ngRoute", "duScroll", "ui.bootstrap"]);

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