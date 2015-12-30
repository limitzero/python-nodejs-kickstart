/* converter takes the express application for configuring the routes for REST interaction */
'use strict';

function init (router){

	router.route('/converter')

		.post(function(req, res) {
		 	var conversionType = req.query.convert;
		 	handleConversion(conversionType, req, res); 
		})

		.get(function(req, res) {
			console.log("GET method reached");
			res.send({"GET": "method reached"});
			res.end();
		}); 
};


function handleConversion(type, req, res)
{
	var palette = req.body;

	if(type === 'toHexFromRGB')
	{	
		var hex = RGBToHex(palette.red, palette.green, palette.blue);
		res.status(200).send(hex);
		res.end();
		return;
	}

	if(type === 'toRGBFromHex')
	{
		var rgb = HexToRGB(palette.hex);
		res.status(200).send(rgb);
		res.end();
		return;
	}

	// bad request
	res.status(500).send(describeValidRequests());
	res.end();
}


function RGBToHex(red, green, blue)
{
	var redHex = red.toString(16);
	var greenHex = green.toString(16);
	var blueHex = blue.toString(16);
	var hex = pad(redHex) + pad(greenHex) + pad(blueHex);
	hex = hex.replace('255','ff')
	return {"hex": hex}
}

function HexToRGB(hex){
	var red = parseInt(hex.substring(0,2), 16);
	var green = parseInt(hex.substring(2,4), 16);
	var blue = parseInt(hex.substring(4,6), 16);
	return {"red": red, "green":green, "blue":blue};
}


function pad(hex)
{
	return (hex.length === 1 ? "0" + hex : hex);
}

function describeValidRequests()
{
	var validRequests = [ 
		{"message" : "Bad Request. The urls below are valid for the API"}, 
			[
				{"url" : '/api/converter/convert=toHexFromRGB'}, 
				{"url" : '/api/converter/convert=toRGBFromHex'}, 
			]
	];
	return validRequests;
}

exports.init = init;
