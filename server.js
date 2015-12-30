/* Basic setup for a REST API server using express and node */
var express = require('express'); 
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var converter = require('./public/js/converter');

// configuration of express for REST API:
app.set('appName', 'converter');
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('views', path.join(__dirname, 'views'));

// generate the router from express and pass it to our custom modules for handling the requests:
var router = express.Router();
converter.init(router);

// all routes will be prefixed with /api, the individual components will handle the "noun" part after the /api (i.e /api.books, /api/movies):
app.use('/api', router); 

server = {};

var start = function() {
	server = http.createServer(app);
	server.listen(app.get('port'));
	console.log('server started...');
}

var stop = function() {
	server.close();
	console.log('server stopped.');
};

// exports (if neccessary):
if (require.main === module) {
  start();
}
else {
  console.info('Running app as a module')
  exports.start = start;
  exports.stop = stop;
  exports.port = app.get('port');

  // for unit tests, expose the base url to the REST API (without resource):
  var baseUrl = 'http://localhost:'+ app.get('port') + '/api';
  console.info('Root REST API url: ' + baseUrl);
  exports.baseUrl = baseUrl;
}