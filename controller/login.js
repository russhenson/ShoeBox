// $("#createaccountbtn").click(function(){
//     window.location.href = "createaccount.html";
// })

const User = require('../model/user');

exports.checklogin = function(req, res){
    console.log(req.body.username);
    console.log(req.body.password);
    let username = req.body.username;
    let password = req.body.password;
    if(username == "admin" && password == "admin123")
        res.render("admincustomers.hbs");
    else if(username == "user" && password == "user123")
        res.render("userprofile.hbs");
    else
        res.render("index.hbs")
}