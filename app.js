var express = require('express');
var app = express();

// set view engine
app.set('view engine', 'ejs');

// root route
app.get('/', function(req, res){
  res.render("index");
});


app.listen(8080, function() {
  console.log("Server started...");
});
