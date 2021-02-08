// $.get("usernav.html", function(data){
//     $("#usernav").replaceWith(data);
// });

const User = require('../model/user');
const Shoe = require('../model/shoe');
const session = require('express-session');

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
    // console.log(req.session.cartItems)
    let cartItems = [];

    if(req.session.cartItems)
        cartItems = req.session.cartItems;
    var currCart = [];

    for(let i=0; i<cartItems.length; i++){
        Shoe.findOne({_id: cartItems[i]}).lean.exec(function(err, shoe){
            currCart.push(shoe);
        })
    }

    var loop = new Promise((resolve, reject)=>{
        cartItems.forEach((value, index, array) => {
            Shoe.findOne({_id: value.id}).lean().exec(function(err, shoe){
                // console.log(shoe);
                currCart.push(shoe);
                // console.log(currCart);
            })
            if(index == array.length-1){
                console.log(currCart);
                resolve();
            }
        })
    }).then(()=>{
        console.log(currCart)
        res.render("shoppingcart.hbs", {product: currCart})
    })
}

exports.checkout = function(req, res){
    res.render("checkout.hbs")
}

exports.addToCart = function(req, res){
    var cartItems = [];
    console.log(req.body);
    let productID = req.body.productID;

    req.session.cartItems = req.session.cartItems ? req.session.cartItems : [];
    cartItemsCount = req.session.cartItems.length;
    req.session.total = req.session.total ? req.session.total : 0;

    req.session.cartItems.push({
        "id": productID
    })

    console.log(req.session.cartItems);

    res.redirect("/");
}

exports.goToCreateAccount = function(req, res){
    res.render("createaccount.hbs")
}

exports.createAccount = function(req, res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.confirmPassword);

    var newUser = new User({
        displayName: req.body.name,
        username: req.body.email,
        isAdmin: false,
        password: req.body.password,
        favorites:[],
        cart:[]
    })

    newUser.save(function(err, user){
        if(err) return console.error(err);
        console.log(user.displayName + " saved to user collection")
    })
    
    res.render("userprofile.hbs",{displayName: req.body.name, emailAddress: req.body.email})
}

exports.addToWishlist = function(req,res){
    console.log(req.body.productID);
    console.log(req.session);
    res.render("userfavorites.hbs")
}