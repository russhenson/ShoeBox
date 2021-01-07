const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const routes = require('./routes');
// const hbs = require('express-handlebars');
const app = express()
const mongoose = require('mongoose');

const port = 3000
const hostname = "127.0.0.1";

// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// const firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
// app.use(bodyParser.json())
// set static folder 
app.use(express.static(path.join(__dirname, 'static')))

//default route
app.use("/", routes);

connect()

// //nike page
// app.get('/nike', function(req,res){
//     res.sendFile(__dirname+"/static/nike.html");
// })

// //login page
// app.get('/login', function(req,res){
//     res.sendFile(__dirname+"/static/login.html");
// })

// //product page
// app.get('/product', function(req,res){
//     res.sendFile(__dirname+"/static/product.html");
// })

function listen(){
    app.listen(port, () =>{
        console.log(`App listening at http://${hostname}:${port}`);
    })
}

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCXDKs8sGdQt44iRV8vSBQFx-BqCz6xTGE",
//     authDomain: "shoebox-f565d.firebaseapp.com",
//     projectId: "shoebox-f565d",
//     storageBucket: "shoebox-f565d.appspot.com",
//     messagingSenderId: "80211702699",
//     appId: "1:80211702699:web:7df35364ea72985cc718ee",
//     measurementId: "G-JDXS3F7R19"
//   };

//   firebase.initializeApp(firebaseConfig);

// connect to mongodb and if successfully connected we also open our port for our node app 
function connect() {
    databaseUrl = "mongodb://localhost:27017/shoeBoxdb"
    mongoose.connection
      .on('error', console.log) //if error happened when connecting to db we log the error
      .on('disconnected', connect) //if we got disconnected to the datbase we will call again the connect function 
      .once('open', listen); //if sucessfully connected to db we call the listen function 
    return mongoose.connect(databaseUrl, {
      keepAlive: 1,
      useNewUrlParser: true, //flag that allows parsing of the databaseurl properly
      useUnifiedTopology: true //prevents deprecation warnings from popping up https://mongoosejs.com/docs/deprecations.html 
    });
  }