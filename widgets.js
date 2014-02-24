angular.module('app').factory('Widgets', ['$resource',
	function($resource) {
		return $resource('https://api.parse.com/1/classes/widgets');;
	}
]);