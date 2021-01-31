// text button
let textButton = document.querySelector("#text-btn");
textButton.addEventListener('click', () => {
	let xhr = new XMLHttpRequest(); 
	xhr.open('GET', './data/message.txt',true);
	xhr.send(); 
	xhr.onload = () => {
		if (xhr.status == 200) {
			let textData = xhr.responseText; 
			displayTextData(textData); 
		}
	}
})

let displayTextData = (data) => {
	let textTemplate = `<h5>${data}</h5>`; 
	document.querySelector("#text-card").innerHTML = textTemplate; 
}


// json button
let jsonButton = document.querySelector("#json-btn"); 
jsonButton.addEventListener("click", () => {
	let xhr = new XMLHttpRequest(); 
	xhr.open("GET", "./data/generated.json", true); 
	xhr.send(); 
	xhr.onload = () => {
		if (xhr.status == 200) {
			let responseData = xhr.responseText;
			let jsonData = JSON.parse(responseData); 
			displayJsonData(jsonData);
		}
	}
})

let displayJsonData = (data) => {
	let jsonTemplate = `
		<ul class="list-group">
			<li class="list-group-item">Index: ${data.index}</li>
			<li class="list-group-item">Guid: ${data.guid}</li>
			<li class="list-group-item">isActive: ${data.isActive}</li>
			<li class="list-group-item">Balance: ${data.balance}</li>
			<li class="list-group-item">Age: ${data.age}</li>
			<li class="list-group-item">Eye Color: ${data.eyeColor}</li>
		</ul>
	`;
	document.querySelector("#json-card").innerHTML = jsonTemplate; 
}


// api button
let apiButton = document.querySelector("#api-btn"); 
apiButton.addEventListener("click", () => {
	let xhr = new XMLHttpRequest(); 
	xhr.open("GET", "http://127.0.0.1:8005/api/v1/employees", true); 
	xhr.send(); 
	xhr.onload = () => {
		if (xhr.status == 200) {
			let apiResponseData = xhr.responseText; 
			let responseData = JSON.parse(apiResponseData); 
			displayApiData(responseData);  
		}
	}
})

let displayApiData = (users) => {
	let apiDataTemplate = ""; 
	for (let user of users) {
		apiDataTemplate += 	`
		<ul class="list-group">
			<li class="list-group-item">ID: ${user.id}</li>
			<li class="list-group-item">Name: ${user.name}</li>
			<li class="list-group-item">Departemnt: ${user.department}</li>
			<li class="list-group-item">Designation: ${user.designation}</li>
			<li class="list-group-item">Gender: ${user.gender}</li>
			<li class="list-group-item">IP: ${user.ip_address}</li>
		</ul><br>
	`;
	}

	document.querySelector("#api-card").innerHTML = apiDataTemplate; 
}
