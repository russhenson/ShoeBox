const post_routes = require('express').Router();

const post = require('../controller/post');

//render all items
post_routes.get("/home", post.render_frontPage)

module.exports = post_routes