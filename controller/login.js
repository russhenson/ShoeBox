// $("#createaccountbtn").click(function(){
//     window.location.href = "createaccount.html";
// })

const User = require('../model/user');

exports.checklogin = function(req, res){
    // console.log(req.body.username);
    // console.log(req.body.password);
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username:username, password:password}).lean().exec(function(err, result){
        console.log(result);
        console.log(result.display_Name)
        if(result.isAdmin){
            res.render("admincustomers.hbs",{});
        }
        else if(!result.isAdmin){
            res.render("userprofile.hbs", {displayName:result.display_Name, emailAddress:result.username, userName: result.username});
        }
        else
            res.redirect("/");
    })

    // if(username == "admin" && password == "admin123")
    //     res.render("admincustomers.hbs");
    // else if(username == "user" && password == "user123")
    //     res.render("userprofile.hbs");
    // else
    //     res.redirect("/")
}