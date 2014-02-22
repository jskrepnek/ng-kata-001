describe ('widgets controller tests', function () {

	var scope, widgetsController;

	beforeEach(function () {

		module('app');

		inject(function($rootScope, $controller) {

			scope = $rootScope.$new();
			widgetsController = $controller('WidgetsController', {$scope:scope});

		});

	});

	it('the widgets controller should be registered as a controller', function () {
		expect(widgetsController).toBeDefined();
	});

});