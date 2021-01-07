const mongoose = require('mongoose');
const Item = require('../model/item');
const Shoe = require('../model/shoe');
const User = require('../model/user');
const path = require('path');
const document = require('html-element').document;

//export function called render_all which returns all items in database
exports.render_all = function(req, res){
    Shoe.find({}).lean().exec(function(err, shoes){
        console.log(shoes);
        shoes.forEach(shoe => {
            console.log(shoe._id);
            console.log(shoe.brand);
            console.log(shoe.stock);
            console.log(shoe.name);
            console.log(shoe.price);

            renderCards(shoe.brand, shoe.name, shoe.price, shoe.image)
        });
    })
    res.sendFile(path.join(__dirname + '/../static/main.html'));
}

function renderCards(brand, name, price, image){
    var productCardDiv = document.createElement("div");
    var productCardImg = document.createElement("img");

    var productCardBrand = document.createElement("h6");
    var productCardName = document.createElement("h5");
    var productCardPrice = document.createElement("h5");

    var images=[image];

    productCardBrand.innerHTML = brand;
    productCardName.innerHTML = name;
    productCardPrice.innerHTML = commaSeparator(price) + "PHP"
    productCardImg.setAttribute("src", images[0]);
    productCardImg.setAttribute("alt", name);

    productCardDiv.className = "product-card";
    productCardImg.setAttribute("class", "product-img");
    productCardBrand.className = "product-brand";
    productCardName.className = "product-name";
    productCardPrice.className = "product-price text-uppercase";

    productCardDiv.appendChild(productCardImg);
    productCardDiv.appendChild(productCardBrand);
    productCardDiv.appendChild(productCardName);
    productCardDiv.appendChild(productCardPrice);

    // Document.getElementById("cardsDiv").appendChild(productCardDiv);
}

function commaSeparator(number){
    var numParts = number.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
}

//login
exports.login_user = function(req, res){
    
}