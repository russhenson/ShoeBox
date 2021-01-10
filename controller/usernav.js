// $.get("usernav.html", function(data){
//     $("#usernav").replaceWith(data);
// });

const User = require('../model/user');

exports.getProfile = function(req, res){
    res.render("userprofile.hbs")
}

exports.getOrders = function(req, res){
    res.render("userorders.hbs");
}

exports.getFavorites = function(req, res){
    res.render("userfavorites.hbs")
}

exports.getCart = function(req, res){
    res.render("shoppingcart.hbs");
}

exports.checkout = function(req, res){
    res.render("checkout.hbs")
}

exports.addToCart = function(req, res){
    console.log(req.body.productID);
    res.render("shoppingcart.hbs");
}

exports.goToCreateAccount = function(req, res){
    res.render("createaccount.hbs")
}

exports.createAccount = function(req, res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.confirmPassword);
    res.render("userprofile.hbs")
}

exports.addToWishlist = function(req,res){
    console.log(req.body.productID);
    res.render("userfavorites.hbs")
}