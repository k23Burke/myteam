var express = require('express');
var app = express();
var path = require('path');

//		modular login
var login = require('./lib/login');
var signup = require('./lib/signup');
var roster = require('./lib/roster');
var events = require('./lib/events');


app.use(login);
app.use(signup);
app.use(roster);
app.use(events);

//		set templating
app.set('view engine', 'jade');
app.set('views',__dirname+'/cmn/');
app.use(express.static(path.join(__dirname, 'cmn')));

//		choose port
app.listen(3700);
console.log('here on port 3700');

//		on root
app.get('/', function(req, res){
	res.render('index');
});

//app.get('/main.js', function(req, res){
//	res.send('/cmn/main.js');
//})
