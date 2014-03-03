describe('the widgets controller', function() {

	var scope, widgetsController,
		Widgets, widgets;

	function setupWidgetsSpy() {

		widgets = [{
			name: 'Widget 1'
		}, {
			name: 'Widget 2'
		}];

		Widgets = jasmine.createSpyObj('Widgets', ['query', 'create']);

		Widgets.query.andReturn(widgets);

	}

	beforeEach(function() {

		module('app');

		setupWidgetsSpy();

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

		it('should set the data returned from querying the Widgets service onto the scope', function() {
			expect(scope.widgets).toEqual(widgets);
		});
	});

	describe('create method', function() {

		it('should be defined on the scope', function() {
			expect(scope.create).toBeDefined();
		});

		describe('when invoked with a new widget name', function() {

			var newWidgetName = 'Widgettty';

			beforeEach(function() {
				scope.create(newWidgetName);
			})

			it('should make a call to the Widgets service create action with a new widget', function() {
				expect(Widgets.create).toHaveBeenCalledWith({
					name: newWidgetName
				});
			});

		});

	});
});