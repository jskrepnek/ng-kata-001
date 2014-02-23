describe('the widgets service', function() {

	var widgets,
		$httpBackend,
		uri = 'https://api.parse.com/1/classes/widgets';

	beforeEach(function() {
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});

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

	describe('remove action', function() {

		it('should be defined', function() {
			expect(widgets.remove).toBeDefined();
		});

		describe('when invoked', function() {

			beforeEach(function() {
				$httpBackend
					.expectDELETE(uri + '/123')
					.respond(201, '');
			});

			afterEach(function() {
				$httpBackend.verifyNoOutstandingExpectation();
				$httpBackend.verifyNoOutstandingRequest();
			});

			it('should send a DELETE request for the widget', function() {
				widgets.remove({
					id: 123
				});
				$httpBackend.flush();
			});

		})
	});

	describe('get action', function() {

		it('should be defined', function() {
			expect(widgets.get).toBeDefined();
		});

		describe('when invoked for a valid object', function() {

			var widget = {
				id: 123,
				name: 'thrappy'
			};

			beforeEach(function() {
				$httpBackend
					.when('GET', uri + '/123')
					.respond(widget);
			});

			it('should return the expected Widget', function() {
				var result = widgets.get({
					id: 123
				});
				$httpBackend.flush();
				expect(result).toEqualData(widget);
			});
		});
	});

	describe('query action', function() {

		it('should be defined', function() {
			expect(widgets.query).toBeDefined();
		});

		describe('when invoked', function() {

			var data = [{
				id: 1,
				name: 'tappy'
			}, {
				id: 2,
				name: 'thrappy'
			}];

			beforeEach(function() {
				$httpBackend
					.when('GET', uri)
					.respond(data);
			});

			it('should return the widgets returned from the backend service', function() {
				var result = widgets.query();
				$httpBackend.flush();
				expect(result).toEqualData(data);
			});
		});
	});
});