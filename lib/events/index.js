var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

var fakeData = '';

app.get('/events', function(req, res){
	res.render('events');
});

app.post('/events', function(req, res){
	var params = req.body;
	console.log(params);

	if(params.Action == 'add'){
		console.log('titties');
	}
	if(params.Action == 'view'){
		//get the id of which to view and display
	}
	if(params.Action == 'edit'){
		//get the id of which they want to edit
	}
	console.log(params);

	res.render('events');
});

//store data 
//-date			convert to UTC
//-time         convert to UTC
//-location		find location using maps?
//-name
//-descirption
//-type
//--practice
//--game
//--event
//--other
//-