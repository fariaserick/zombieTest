process.env.NODE_ENV = 'test';
var assert 	= require('assert'),
	Browser = require('zombie')
	;

	describe('Index', function(){

		it('should load the form', function(done){
			var browser = new Browser();

			browser.on("error", function(){
				console.error(error);
			});

			done();
		});
	});