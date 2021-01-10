const user_routes = require('express').Router();

const user_controller = require('../controller/usernav');
// const admin_controller = require('../controller/adminnav');
const login_controller = require('../controller/login');

//render user profile
user_routes.get('/profile', user_controller.getProfile);

//render user orders
user_routes.get('/orders', user_controller.getOrders);

//render user favorites
user_routes.get('/favorites', user_controller.getFavorites);

//view cart
user_routes.get('/cart', user_controller.getCart);

//login
user_routes.post('/login', login_controller.checklogin);

//checkout
user_routes.get('/checkout', user_controller.checkout)

//add to cart
user_routes.post('/addToCart', user_controller.addToCart);

//create account
user_routes.get('/createaccount', user_controller.goToCreateAccount);

//account created
user_routes.post('/accountcreated', user_controller.createAccount);

user_routes.post('/addtowishlist', user_controller.addToWishlist);

module.exports = user_routes;