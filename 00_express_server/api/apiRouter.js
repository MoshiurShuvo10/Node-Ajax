const { request } = require('express');
const express = require('express'); 
const router = express.Router(); 

// in memory dummy data 
let employees = [
	{
		id: '_1001',
		name: 'Moshiur Rahman',
		department: 'janina',
		designation: 'vugi chugi',
		gender: 'Male',
		ip_address: '127.0.0.1'
	},
	{
		id: '_1002',
		name: 'shuvo',
		department: 'janina',
		designation: 'bolbona',
		gender: 'Male',
		ip_address: '127.0.0.1'
	}
]; 

// get a random id for employees
let getId = () => "_" + Math.random().toString(36).substr(2, 9); 

//get employee
router.get('/employees', (request, response) => {
	response.json(employees);
})

// create employee
router.post('/employees', (request, response) => {
	let employee = {
		id: getId(),
		name: request.body.name,
		department: request.body.department,
		designation: request.body.designation,
		gender: request.body.gender,
		ip_address: request.body.ip_address
	}; 
	employees.push(employee); 
	response.json({message:'Post request is success'}); 
}); 


// update employee
router.put('/employees/:id', (request, response) => {
	let empId = request.params.id;
	let updatedEmployee = {
		id: empId,
		name: request.body.name,
		department: request.body.department,
		designation: request.body.designation,
		gender: request.body.gender,
		ip_address: request.body.ip_address
	};

	let existingEmployee = employees.find(employee => employee.id == empId);
	employees.splice(employees.indexOf(existingEmployee), 1, updatedEmployee);
	response.json({ message: "PUT request is success" });
}); 


//delete employee
router.delete('/employees/:id', (request, response) => {
	let empId = request.params.id;
	employees = employees.filter(employee => employee.id != empId); 
	response.json({ message: "DELETE request is success" });
}); 
module.exports = router; 