const User = require('../model/user');
const Shoe = require('../model/shoe');
var userArray = []


// $.get("adminnav.html", function(data){
//     $("#adminnav").replaceWith(data);
// });

exports.getCustomers = function(req, res){
    User.find({}).lean().exec(function(err, users){
        userArray.push(users);
    });
    res.render('admincustomers.hbs');
}

exports.getOrders = function(req, res){
    res.render('adminorders.hbs');
}

exports.getProducts = function(req, res){
    let shoesArray=[];
    Shoe.find().lean().exec(function(err, shoes){
        shoes.forEach(shoe =>{
            /* shoe.price = commaSeparator(shoe.price); */
            shoesArray.push(shoe);
        });
        console.log(shoesArray);
        res.render("adminproducts.hbs", {shoe: shoesArray})
        
    })
}

exports.getSales = function(req, res){
    res.render('adminsales.hbs');
}