var express = require('express'),
	app = module.exports = express();
var url = require('url'),
	path = require('path');
	bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/login', function(req, res){
	res.render('form');
});


app.post('/login', function(req, res){
//	var params = req.param(username);
//	console.log(params);
	var params = req.body;
	console.log(params);
//	var url_parts = url.parse(req.url, true);
//	console.log(url_parts);
	res.send('woohooooo');
});
