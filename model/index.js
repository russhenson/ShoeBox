const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 9090;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
// set static folder 
app.use(express.static(path.join(__dirname, '/../static')))

//default route
app.get('/', function(req,res){
    res.sendFile(__dirname+"/../static/index.html");
})

//nike page
app.get('/nike', function(req,res){
    res.sendFile(__dirname+"/../static/nike.html");
})

//login page
app.get('/login', function(req,res){
    res.sendFile(__dirname+"/../static/login.html");
})

//product page
app.get('/product', function(req,res){
    res.sendFile(__dirname+"/../static/product.html");
})

app.listen(port, function(){
    console.log(`App listening at port` + port);
})