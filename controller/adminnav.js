const User = require('../model/user');
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
    res.render('adminproducts.hbs');
}

exports.getSales = function(req, res){
    res.render('adminsales.hbs');
}