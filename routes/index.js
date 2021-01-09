const routes = require('express').Router();
const post = require('./post');
const post_controller = require('../controller/post');

routes.use('/', post);
// routes.get('/', post_controller.render_frontPage);
// routes.get('/home', post_controller.render_frontPage);
// routes.get('/nike', post_controller.getNike);
// routes.get('/loginPage', post_controller.loginPage)
// routes.get('/test', function(req,res){
//     res.send('This route is working')
// })
// routes.get('/', function(req,res){
//     res.send('Hello World!')
// })

module.exports = routes;