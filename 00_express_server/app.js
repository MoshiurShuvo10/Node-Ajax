const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const { urlencoded } = require('body-parser');
const apiRouter = require('./api/apiRouter'); 
const hostName = '127.0.0.1'; 
const port = 8005; 

//configure body parser
const jsonParser = bodyParser.json(); 
const urlEncodedParser = bodyParser.urlencoded({ extended:false}); 
app.use(jsonParser);
app.use(urlEncodedParser); 

//configure cors
app.use(cors()); 

//configure router
app.use('/api/v1', apiRouter); 

app.get('/', (req,res) => {
	res.send(`<h2>Welcome to express server</h2>`); 
});

app.listen(port, hostName, () => {
	console.log(`Express server is ready at http://${hostName}:${port}`) ; 
});