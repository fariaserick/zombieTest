process.env.NODE_ENV = 'test';
var assert 	= require('assert'),
	Browser = require('zombie')
	//app		= require('../../server')
	;

	describe('Index', function(){
		
		/*before(function(){
			this.server = http.createServer(app).listen(3000);
		)};*/

		it('should load the form', function(done){
			var browser = new Browser();

			browser.on("error", function(){
				console.error(error);
			});

			browser.visit('https://github.com/fariaserick/zombieTest/', function(){
				/*then(function(){
					assert.equal(browser.text("input"), "teste");
					return browser.clickLink
				});*/

				browser
				.fill('#Name', 'Daniel Teixeira')
				.select('#Born', '1970')
				.check('#Agree');
				/*
				.pressButton('#Submit', function(){
					assert.equal(browser.location.pathname, '/success');
					assert.equal(browser.text('#message'),
						'Thank you for submitting this form!');
				});
				*/

				// SHOW ME THE DOCUMENT CONTENTS.
				//console.log(browser.html());

				// CHECK THE DOCUMENT TITLE.
				assert.equal(browser.text("title"), "zombieTest");

				// MAKE SURE WE HAVE AN ELEMENT WITH ID NAME
				assert.ok (browser.query("#Name"));

				assert.ok(browser.success, 'page loaded!');
				
				if(browser.error)
					console.dir("Errors reported:", browser.errors);

				done();
			});
		});
	});

	/*
	after(function(done){
		//app.server.close(done);
	)};
	*/