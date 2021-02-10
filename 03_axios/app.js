// intercept requests
axios.interceptors.request.use(requestFromClientMachine => {
	console.log(`${requestFromClientMachine.method.toUpperCase()} request sent to ${requestFromClientMachine.url} 
	at ${new Date()}`); 
	return requestFromClientMachine; 
}, error => {
		return Promise.reject(error)
}); 

let getTodos = () => {
	console.log('Get Todos'); 
	axios.get('https://jsonplaceholder.typicode.com/todos', { timeout: 5000 })
		.then(response => displayData(response))
		.catch(error => console.log(error)); 
}

let addTodo = () => {
	console.log('Add Todo');
	axios({
		method: 'POST',
		url: 'https://jsonplaceholder.typicode.com/todos',
		data: {
			title: 'Learn Spring',
			completed: 'false'
		}
	})
		.then(res => displayData(res))
		.catch(err => console.log(err)); 
}


let updateTodo = () => { 
	console.log('Update Todos');
	axios({
		method: 'PATCH',
		url: 'https://jsonplaceholder.typicode.com/todos/1',
		data: {
			title: 'Learn HIBERNATE',
			completed: 'true'
		}
	})
		.then(response => displayData(response)
		.catch(error => console.log(error))); 
} 


let deleteTodo = () => {
	console.log('Delete Todos'); 
	axios({
		method: 'DELETE',
		url: 'https://jsonplaceholder.typicode.com/todos/1'
	})
		.then(response => displayData(response)
		.catch(error => console.log(error))); 
}
let getSimaltaneousData = () => {
	console.log('Get Simaltaneous data');
	axios
		.all([
			axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'),
			axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
		])
		.then(axios.spread((todos, posts) => displayData(posts)))
		.catch (err => console.log(err)); 
		// .then(response => {
		// 	console.log(response[0]); 
		// 	console.log(response[1]);
		// 	displayData(response[1]); 
		// })
		// .catch(error => console.log(error)); 	
}


// Transfor req and res
let transformResponse = () => {
	console.log('Transform Response');
	axios({
		method: 'POST',
		url: 'https://jsonplaceholder.typicode.com/todos',
		data: {
			title:'This is transformed data'
		},
		transformResponse: axios.defaults.transformResponse.concat(data => {
			data.title = data.title.toUpperCase(); 
			return data; 
		})
	})
		.then(response => displayData(response)); 
} 
let errorHandling = () => {
	console.log('Error Handling'); 
	axios.get('https://jsonplaceholder.typicode.com/todosssssssssssssssssssss')
		.then(response => displayData(response))
		.catch(err => {
			if (err.response.status === 404)
				alert('ERROR! Page Not Found')
			
			else if (err.request)
				console.error(err.request)
			else
				console.error(err.message); 
	})
}
let displayData = response => {
	document.querySelector('#response').innerHTML = `
		<div class="card card-body mb-4">
			<h5>Status: ${response.status}</h5>
		</div>
		<div class="card mt-3">
			<div class="card-header">Headers
			</div>
			<div class="card-body">
			<pre> ${JSON.stringify(response.headers,null,2)} </pre>
			</div>
		</div>
		<div class="card mt-3">
			<div class="card-header">Data</div>
			<div class="card-body">
				<pre> ${JSON.stringify(response.data,null,2)} </pre>
			</div>	
		</div>
	`;
}

document.querySelector('#get').addEventListener('click', getTodos); 
document.querySelector('#post').addEventListener('click', addTodo);
document.querySelector('#update').addEventListener('click', updateTodo);
document.querySelector('#delete').addEventListener('click', deleteTodo);
document.querySelector('#sim').addEventListener('click', getSimaltaneousData); 
document.querySelector('#transformResponse').addEventListener('click', transformResponse);
document.querySelector('#errorHandling').addEventListener('click', errorHandling);


