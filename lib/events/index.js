var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

var fakeData = '';

app.get('/events', function(req, res){
	res.render('events');
});