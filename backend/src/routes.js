const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');


const routes = express.Router();

routes.get('/', EmployeeController.index)
routes.post('/products', EmployeeController.store);

module.exports = routes;