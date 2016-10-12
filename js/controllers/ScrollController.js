app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
	function($scope, $location, $anchorScroll) {
		$scope.gotoId = function(link) {
			$location.hash(link);
			$anchorScroll();
		};
	}]);