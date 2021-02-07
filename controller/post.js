const mongoose = require('mongoose');
const Item = require('../model/item');
const Shoe = require('../model/shoe');
const User = require('../model/user');
//const path = require('path');
const document = require('html-element').document;

var brands = ["Nike", "Yeezy", "New Balance", "Air Jordan", "Adidas"];
var brandfeatureIndex = 0;
var brandArrivalIndex = 0;

var featured=[];
var newArrivals=[]
var isChosen = true;

//export function called render_all which returns all items in database
exports.render_frontPage = function(req, res){
    Shoe.find({}).lean().exec(function(err, shoes){
        // console.log(shoes);
        shoes.forEach(shoe => {
            isChosen = false;
            // console.log(shoe._id);
            // console.log(shoe.brand);
            // console.log(shoe.stock);
            // console.log(shoe.name);
            // console.log(shoe.price);
            shoe.price = commaSeparator(shoe.price);
            if(shoe.brand == brands[brandfeatureIndex]){
                featured.push(shoe);
                // console.log(featured);
                brandfeatureIndex++;
                isChosen = true;
            }
            if(shoe.brand == brands[brandArrivalIndex] && !isChosen){
                newArrivals.push(shoe);
                brandArrivalIndex++;
                isChosen = true;
            }
            // if(!isFeatured){
            //     newArrivals.push(shoe);
            // }
            // shoe.price = commaSeparator(shoe.price);
            // console.log(shoe.price)
        });

        // console.log("featured "+ featured);
        // res.sendFile(path.join(__dirname + '/../static/main.html'));
        // console.log(featured[0].brand)
        // console.log(featured[0].image[0]);
        res.render("index.hbs", {product: featured, newArrival: newArrivals});
    })
}

function commaSeparator(number){
    var numParts = number.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
}

//login page
exports.loginPage = function(req, res){
    res.render("login.hbs");
}

//login
exports.login_user = function(req, res){
    User.findOne({username: "user", password: "user123"}).lean().exec(function(err, user){
        //placeholder
        if(user.isAdmin)
            res.render(admin.html);
        else
            res.render(home.html);
    })
}

exports.getNike = function(req, res){
    let shoesArray=[];
    Shoe.find({brand: "Nike"}).lean().exec(function(err, shoes){
        shoes.forEach(shoe =>{
            shoe.price = commaSeparator(shoe.price);
            shoesArray.push(shoe);
        });
        console.log(shoesArray);
        res.render("nike.hbs", {nike: shoesArray})
    })
    // res.render("nike.hbs");
}

exports.getAdidas = function(req, res){
    let shoesArray=[];
    Shoe.find({brand: "Adidas"}).lean().exec(function(err, shoes){
        shoes.forEach(shoe =>{
            shoe.price = commaSeparator(shoe.price);
            shoesArray.push(shoe);
        });
        console.log(shoesArray);
        res.render("adidas.hbs", {adidas: shoesArray})
    })
}

exports.getNewBalance = function(req, res){
    let shoesArray=[];
    Shoe.find({brand: "New Balance"}).lean().exec(function(err, shoes){
        shoes.forEach(shoe =>{
            shoe.price = commaSeparator(shoe.price);
            shoesArray.push(shoe);
        });
        console.log(shoesArray);
        res.render("newbalance.hbs", {newbalance: shoesArray})
    })
}

exports.getJordan = function(req, res){
    let shoesArray=[];
    Shoe.find({brand: "Air Jordan"}).lean().exec(function(err, shoes){
        shoes.forEach(shoe =>{
            shoe.price = commaSeparator(shoe.price);
            shoesArray.push(shoe);
        });
        console.log(shoesArray);
        res.render("jordan.hbs", {jordan: shoesArray})
    })
}

exports.getYeezy = function(req, res){
    let shoesArray=[];
    Shoe.find({brand: "Yeezy"}).lean().exec(function(err, shoes){
        shoes.forEach(shoe =>{
            shoe.price = commaSeparator(shoe.price);
            shoesArray.push(shoe);
        });
        console.log(shoesArray);
        res.render("yeezy.hbs", {yeezy: shoesArray})
    })
}

exports.getProduct = function(req, res){
    let productId = req.params['_id'];
    Shoe.findOne({_id: productId}).lean().exec(function(err, shoe){
        //console.log(shoe.price);
        shoe.price = commaSeparator(shoe.price)
        console.log(shoe.image[0]);
        // console.log(selectedProduct._id);
        res.render("product.hbs", {name:shoe.name, brand: shoe.brand, price: shoe.price, _id: shoe._id, imageSrc: shoe.image[0]});
    })
}