/*
ok some points about unit testing routes with express and superagent
====================================================================
1. superagent has a global callback that should be invoked when each request is issued (noted by dependency of "done" in the unit tests)
2. the superagent callback cannot be nested inside of the unit test (i.e. multiple requests in one test and calling "done" on each one)
3. express uses native json objects from client to server so parsing the response is not neccessary, but you must include the middleware 
part in express to parse the message body...
*/

// adapted from : https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

'use strict';
var server_start = require('../server').start,
	server_stop = require('../server').stop, 
	port = require('../server').port,
	baseUrl = require('../server').baseUrl;
var superagent = require('superagent');
var expect = require('expect.js');

before(function(){
	server_start();
}); 

describe('color code converter', function(){

	describe('RGB to Hex conversion', function() {
		var url = baseUrl + '/converter?convert=toHexFromRGB'; 

		describe('converting the basic colors', function() {

			it('converts RGB red to its hex value', function(done) {
				superagent.post(url)
					.send({"red":255, "green":0, "blue":0})
					.end(function(err, res) {
						var redHex = res.body.hex; 
						expect(redHex).to.be("ff0000");
						done();
					});			
			});

			it('converts RGB green to its hex value', function(done) {
				superagent.post(url)
					.send({"red":0, "green":255, "blue":0})
					.end(function(err, res) {
						var greenHex = res.body.hex; 
						expect(greenHex).to.be("00ff00");
						done();
					});			
			});

			it('converts RGB blue to its hex value', function(done) {
				superagent.post(url)
					.send({"red":0, "green":0, "blue":255})
					.end(function(err, res) {
						var blueHex = res.body.hex; 
						expect(blueHex).to.be("0000ff");
						done();
					});			
			});
		}); 
		
	}); 

	describe('Hex to RGB conversion', function() {

		var url = baseUrl + '/converter?convert=toRGBFromHex'; 
		var rgb = {};

		beforeEach(function() {
			rgb = {"red":0, "green":0, "blue":0};
		}); 

		describe('converting the basic colors', function() {

			it('converts Hex red to RGB red', function(done){
				superagent.post(url)
					.send({"hex": "ff0000"})
					.end(function (err, res) {
						var ret = res.body;
						rgb.red = 255;
						expect(ret.toString()).to.be(rgb.toString());
						expect(res.status).to.be(200);
						done();
					});
			}); 

			it('converts Hex green to RGB green', function(done){
				superagent.post(url)
					.send({"hex": "00ff00"})
					.end(function (err, res) {
						var ret = res.body;
						rgb.green = 255;
						expect(ret.toString()).to.be(rgb.toString());
						expect(res.status).to.be(200);
						done();
					});
			}); 

			it('converts Hex blue to RGB blue', function(done){
				superagent.post(url)
					.send({"hex": "0000ff"})
					.end(function (err, res) {
						var ret = res.body;
						rgb.blue = 255;
						expect(ret.toString()).to.be(rgb.toString());
						expect(res.status).to.be(200);
						done();
					});
			}); 

		});

	});

});

after(function() {
	server_stop();
});


