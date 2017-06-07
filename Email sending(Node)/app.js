// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/addUser12');

// Create Express application
var app = module.exports = express();
// var expressJWT=require('express-jwt');

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(expressJWT({secret:'sugar'}).unless({path:['/api/u1/verify']}));

app.use(bodyParser.json());

var routes = require('./Router/user')
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 2000;

// Start the server
app.listen(port);
console.log('Insert at port' + port);
