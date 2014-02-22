describe ('the widgets controller', function () {

	var scope, widgetsController;

	beforeEach(function () {

		module('app');

		inject(function($rootScope, $controller) {

			scope = $rootScope.$new();
			widgetsController = $controller('WidgetsController', {$scope:scope});

		});

	});

	it('should be registered as a controller', function () {
		expect(widgetsController).toBeDefined();
	});

});