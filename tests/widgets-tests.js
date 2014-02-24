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
	});

	describe('create action', function() {

		it('should be defined', function() {
			expect(widgets.create).toBeDefined();
		})

	});

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

		it('should set the appropriate authentication headers', function() {

			$httpBackend
				.expectGET('https://api.parse.com/1/classes/widgets', {
					"Accept":"application/json, text/plain, */*",
					'X-Parse-Application-Id': 'kXIwOzlPDyw0Ix1r8z1RlaNyK10CfDO4ww9067ZW',
					'X-Parse-REST-API-Key': 'WIQ1QYfu1KHbEbRlJp9X7awwwjqqcJu54cOuBJTJ'
				})
				.respond([]);

			widgets.query();
			$httpBackend.flush();

			$httpBackend.verifyNoOutstandingExpectation();
		});
	});
});