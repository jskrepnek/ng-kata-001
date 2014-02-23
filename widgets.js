angular.module('app').factory('Widgets', ['$resource',
	function($resource) {
		return $resource('https://api.parse.com/1/classes/widgets', {}, {
			headers: {
				'X-Parse-Application-Id': 'kXIwOzlPDyw0Ix1r8z1RlaNyK10CfDO4ww9067ZW',
				'X-Parse-REST-API-Key': 'WIQ1QYfu1KHbEbRlJp9X7awwwjqqcJu54cOuBJTJ'
			}
		});
	}
]);