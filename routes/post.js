const post_routes = require('express').Router();

const post = require('../controller/post');

//render all items
post_routes.get("/render_all", post.render_all)

module.exports = post_routes