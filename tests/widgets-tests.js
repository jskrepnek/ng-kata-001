describe('the widgets service', function() {

	var widgets;

	beforeEach(function() {

		module('app');

		inject(function($injector) {
			widgets = $injector.get('Widgets');
		})

	});

	it('should be registered with the injector', function() {
		expect(widgets).toBeDefined();
	});

	describe('query action', function () {

		it('should be defined', function () {
			expect(widgets.query).toBeDefined();
		});

	});
});