const admin_routes = require('express').Router();
const admin_controller = require('../controller/adminnav');

//show customers
admin_routes.get('/customers', admin_controller.getCustomers);

//show orders
admin_routes.get('/orders', admin_controller.getOrders);

//show products
admin_routes.get('/products', admin_controller.getProducts);

//show add prod page
admin_routes.get('/addprod', admin_controller.getAddProd);

module.exports = admin_routes;