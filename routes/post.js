const post_routes = require('express').Router();

const post = require('../controller/post');

//render front page
post_routes.get("/home", post.render_frontPage);

//login
post_routes.post("/login", post.login_user);

//all nike shoes
post_routes.get("/nike", post.getNike);

//all nike shoes
post_routes.get("/adidas", post.getAdidas);

//all nike shoes
post_routes.get("/new_balance", post.getNewBalance);

//all nike shoes
post_routes.get("/jordan", post.getJordan);

//all nike shoes
post_routes.get("/yeezy", post.getYeezy);

module.exports = post_routes