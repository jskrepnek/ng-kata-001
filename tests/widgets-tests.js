describe('widgets tests', function () {

	var widgets;

	beforeEach(function () {

		module('app');

		inject(function ($injector) {
			widgets = $injector.get('Widgets');
		})

	});

	it('the widgets service should be registered with the injector', function () {
		expect(widgets).toBeDefined();
	})
});