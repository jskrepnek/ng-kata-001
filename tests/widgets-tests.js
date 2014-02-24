describe('the widgets service', function() {

	var widgets, $httpBackend;

	beforeEach(function() {

		module('app');

		inject(function($injector) {
			widgets = $injector.get('Widgets');
			$httpBackend = $injector.get('$httpBackend');
		})

	});

	it('should be registered with the injector', function() {
		expect(widgets).toBeDefined();
	})

	describe('query action', function() {
		
		it('should be defined', function() {
			expect(widgets.query).toBeDefined();
		});

		it('should make a HTTP GET request to the correct URL', function() {

			$httpBackend
				.expectGET('https://api.parse.com/1/classes/widgets')
				.respond([]);

			widgets.query();
			$httpBackend.flush();
			
			$httpBackend.verifyNoOutstandingExpectation();
		});
	});
});