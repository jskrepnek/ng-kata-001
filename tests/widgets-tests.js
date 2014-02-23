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