angular.module('app').controller('WidgetsController', ['$scope', 'Widgets', 
	function ($scope, Widgets) {

		$scope.widgets = Widgets.query();

		$scope.create = function(newWidgetName) {

			var newWidget = {
				name: newWidgetName
			};

			Widgets.create(newWidget);

		};

}]);