var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('Hello World');
});

app.listen(5000, function(){
      console.log('Server Started on Port 5000...');
})