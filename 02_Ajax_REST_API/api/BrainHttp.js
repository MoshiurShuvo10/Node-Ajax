export default class BrainHttp {
	constructor() {
		this.http = new XMLHttpRequest(); 
	}

	// Get request
	get = (url,callback) => {
		this.http.open('GET', url, true); 
		this.http.send(); 
		this.http.onload = () => {
		if (this.http.status == 200) {
			let apiResponseData = this.http.responseText; 
			let employees = JSON.parse(apiResponseData); 
			callback(null,employees);   
		}
		else {
			callback(`ERROR: ${this.http.status}`); 
			}
	}
	}
	
	// post request
	post = (url, employee, callback) => {
		this.http.open("POST", url, true);
		this.http.setRequestHeader("Content-Type", "application/json");
		this.http.send(JSON.stringify(employee)); 
		this.http.onload = () => {
			let data = this.http.responseText; 
			let employees = JSON.parse(data); 
			callback(employees); 
		}
	}

	// put request
	put = (url, employee, callback) => {
		this.http.open("PUT", url, true);
		this.http.setRequestHeader("Content-Type", "application/json");
		this.http.send(JSON.stringify(employee)); 
		this.http.onload = () => {
			let data = this.http.responseText; 
			let employees = JSON.parse(data); 
			callback(employees); 
		}
	}

	// delete request
	delete = (url, callback) => {
		this.http.open("DELETE", url, true);
		this.http.setRequestHeader("Content-Type", "application/json");
		this.http.send(); 
		this.http.onload = () => {
			let data = this.http.responseText; 
			let employees = JSON.parse(data); 
			callback(employees); 
		}
	}
}