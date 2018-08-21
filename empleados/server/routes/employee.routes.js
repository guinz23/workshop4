const express= require ('express');
const route= express.Router();
const  employeeController=require('../controllers/employee.controller');

route.get('/',employeeController.getEmployees);
route.post('/',employeeController.createEmployee);
route.get('/:id',employeeController.getEmployee);
route.put('/:id',employeeController.updateEmployee);
route.delete('/:id',employeeController.deleteEmployee);
module.exports = route;