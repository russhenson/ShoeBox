// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// const firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

// const firestoreSchema = require("firestore-schema");

// const firebase

const item = require("./item");

const userSchema = {
    displayName: String,
    username: String,
    password: String,
    cart: [item]
}