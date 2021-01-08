const mongoose = require('mongoose');
const Item = require('../model/item');
const Shoe = require('../model/shoe');
const User = require('../model/user');
const path = require('path');
const document = require('html-element').document;

var brands = ["nike", "yeezy", "new balance", "jordan", "adidas"];
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

//login
exports.login_user = function(req, res){
    z
}