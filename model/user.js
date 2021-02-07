// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// const firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

// const firestoreSchema = require("firestore-schema");

// const firebase

// const item = require("./item");

// const userSchema = {
//     displayName: String,
//     username: String,
//     password: String,
//     cart: [item]
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItem = require('./item').schema;
const shoeItem = require('./shoe').schema;

const userSchema = new mongoose.Schema({
    displayName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    favorites:[{
        type: String,
        required: true
    }],
    cart:[{type: String,
        required: true
    }]
})

//use cookies

module.exports = mongoose.model('User', userSchema);