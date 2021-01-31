import BrainHttp from "./api/BrainHttp.js";
const baseURL = `http://127.0.0.1:8005/api/v1`; 

let getButton = document.querySelector("#get-btn"); 
let postButton = document.querySelector("#post-btn");
let putButton = document.querySelector("#put-btn");
let deleteButton = document.querySelector("#delete-btn");


getButton.addEventListener("click", () => {
	fetchEmployees(); 
})

let fetchEmployees = () => {
	let brainHttp = new BrainHttp(); 
	let getURL = `${baseURL}/employees`; 
	brainHttp.get(getURL, (err,employees) => {
		if (err) throw err; 
		let tableRow = ``; 
		for (let employee of employees) {
			tableRow += `
					<tr>
						<td>${employee.id}</td>
						<td>${employee.name}</td>
						<td>${employee.department}</td>
						<td>${employee.designation}</td>
						<td>${employee.gender}</td>
						<td>${employee.ip_address}</td>
					</tr>
				`
		}
		document.querySelector("#table-body").innerHTML = tableRow; 
	}); 
}


postButton.addEventListener("click", () => {
	let employee = {
		name: "John",
		department: "qa",
		designation: "Manager",
		gender: "Male",
		ip_address: "127.0.0.1"
	};
	let postURL = `${baseURL}/employees`;
	let http = new BrainHttp();
	http.post(postURL, employee, (data) => {
		console.log(JSON.stringify(data));
		fetchEmployees();
	});
});

putButton.addEventListener("click", () => {
	let empID = '_p3h8lmzw5'; 
	let updatedEmployee = {
		name: 'John',
		department: 'HR',
		designation: 'Manager',
		gender: 'Male',
		ip_address: '127.0.0.1'
	}
	let putURL = `${baseURL}/employees/${empID}`; 
	let http = new BrainHttp(); 
	http.put(putURL, updatedEmployee, (data) => {
		console.log(data); 
		fetchEmployees(); 
	})
}); 


deleteButton.addEventListener("click", () => {
	let empID = '_lw6oc7pfm'; 
	let deleteURL = `${baseURL}/employees/${empID}`; 
	let http = new BrainHttp(); 
	http.delete(deleteURL, (data) => {
		console.log(data); 
		fetchEmployees(); 
	})
});