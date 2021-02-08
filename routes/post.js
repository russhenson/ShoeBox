const post_routes = require('express').Router();

const session = require('express-session');
const post = require('../controller/post');

//render front page
post_routes.get("/", post.render_frontPage);

//login page
post_routes.get("/loginPage", post.loginPage);

//login
post_routes.post("/login", post.login_user);

//all nike shoes
post_routes.get("/nike", post.getNike);

//all adidas shoes
post_routes.get("/adidas", post.getAdidas);

//all new balance shoes
post_routes.get("/new_balance", post.getNewBalance);

//all jordan shoes
post_routes.get("/jordan", post.getJordan);

//all yeezy shoes
post_routes.get("/yeezy", post.getYeezy);

//all brands
post_routes.get("/allbrands", post.getAllBrands);

//show product
post_routes.get("/product/:_id", post.getProduct);

module.exports = post_routes