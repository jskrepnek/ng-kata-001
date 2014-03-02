angular.module('app').controller('WidgetsController', ['Widgets', 
	function (Widgets) {

		Widgets.query();

}]);