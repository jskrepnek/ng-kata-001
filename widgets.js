angular.module('app').factory('Widgets', ['$resource',
	function($resource) {

		var authHeaders = {
			'X-Parse-Application-Id': 'kXIwOzlPDyw0Ix1r8z1RlaNyK10CfDO4ww9067ZW',
			'X-Parse-REST-API-Key': 'wqLjO3gtMzZS34fWO7Y8UYou5nVWKi4MrhLqTl0a'
		};

		return $resource('https://api.parse.com/1/classes/widgets', {}, {
			query: {
				method: 'GET',
				isArray: true,
				headers: authHeaders,
				transformResponse: function(data) {
					var deData = angular.fromJson(data);
					return deData.results;
				}
			},
			create: {
				method: 'POST',
				headers: authHeaders
			}
		});
	}
]);