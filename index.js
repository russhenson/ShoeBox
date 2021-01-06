const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
// set static folder 
app.use(express.static(path.join(__dirname, 'static')))

//default route
app.get('/', function(req,res){
    res.sendFile(__dirname+"/static/index.html");
})

//nike page
app.get('/nike', function(req,res){
    res.sendFile(__dirname+"/static/nike.html");
})

//login page
app.get('/login', function(req,res){
    res.sendFile(__dirname+"/static/login.html");
})

//product page
app.get('/product', function(req,res){
    res.sendFile(__dirname+"/static/product.html");
})

app.listen(port, function(){
    console.log(`App listening at port` + port);
})

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXDKs8sGdQt44iRV8vSBQFx-BqCz6xTGE",
    authDomain: "shoebox-f565d.firebaseapp.com",
    projectId: "shoebox-f565d",
    storageBucket: "shoebox-f565d.appspot.com",
    messagingSenderId: "80211702699",
    appId: "1:80211702699:web:7df35364ea72985cc718ee",
    measurementId: "G-JDXS3F7R19"
  };

  firebase.initializeApp(firebaseConfig);