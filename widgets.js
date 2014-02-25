angular.module('app').factory('Widgets', ['$resource',
	function($resource) {

		var authHeaders = {
			'X-Parse-Application-Id': 'kXIwOzlPDyw0Ix1r8z1RlaNyK10CfDO4ww9067ZW',
			'X-Parse-REST-API-Key': 'WIQ1QYfu1KHbEbRlJp9X7awwwjqqcJu54cOuBJTJ'
		};

		return $resource('https://api.parse.com/1/classes/widgets', {}, {
			query: {
				method: 'GET',
				isArray: true,
				headers: authHeaders
			},
			create: {
				method: 'POST',
				headers: authHeaders
			}
		});
	}
]);