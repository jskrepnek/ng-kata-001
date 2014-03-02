describe('the widgets controller', function() {

	var scope, widgetsController,
		Widgets;

	beforeEach(function() {

		Widgets = jasmine.createSpyObj('Widgets', ['query']);;

		module('app');

		inject(function($rootScope, $controller) {

			scope = $rootScope.$new();
			widgetsController = $controller('WidgetsController', {
				$scope: scope,
				Widgets: Widgets
			});

		});

	});

	it('should be registered with the injector as a controller', function() {
		expect(widgetsController).toBeDefined();
	});

	describe('on initialization', function() {
		it('should query the Widgets service', function() {
			expect(Widgets.query).toHaveBeenCalled();
		});
	});
});