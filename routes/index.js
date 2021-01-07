const routes = require('express').Router();
const post = require('./post');
const post_controller = require('../controller/post');

routes.use('/post', post);
routes.get('/', post_controller.render_frontPage);

module.exports = routes;