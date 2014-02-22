angular.module('app').factory('Widgets', ['$resource',
	function($resource) {
		return $resource('url');
	}
]);