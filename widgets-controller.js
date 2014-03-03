angular.module('app').controller('WidgetsController', ['$scope', 'Widgets', 
	function ($scope, Widgets) {

		$scope.widgets = Widgets.query();

		$scope.create = function() {
		};

}]);