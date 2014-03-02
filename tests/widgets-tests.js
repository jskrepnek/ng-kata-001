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
		});

		it('should make a HTTP POST request to the correct URL with the expected data and headers', function() {

			var data = {
				name: 'test widget'
			};

			$httpBackend
				.expectPOST('https://api.parse.com/1/classes/widgets', data, {
					"Accept": "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=utf-8",
					'X-Parse-Application-Id': 'kXIwOzlPDyw0Ix1r8z1RlaNyK10CfDO4ww9067ZW',
					'X-Parse-REST-API-Key': 'wqLjO3gtMzZS34fWO7Y8UYou5nVWKi4MrhLqTl0a'
				})
				.respond(201, '');

			var widget = new widgets();
			widget.name = 'test widget';
			widget.$create();
			
			$httpBackend.flush();			
			$httpBackend.verifyNoOutstandingExpectation();
		});

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
					"Accept": "application/json, text/plain, */*",
					'X-Parse-Application-Id': 'kXIwOzlPDyw0Ix1r8z1RlaNyK10CfDO4ww9067ZW',
					'X-Parse-REST-API-Key': 'wqLjO3gtMzZS34fWO7Y8UYou5nVWKi4MrhLqTl0a'
				})
				.respond([]);

			widgets.query();
			$httpBackend.flush();

			$httpBackend.verifyNoOutstandingExpectation();
		});
	});
});