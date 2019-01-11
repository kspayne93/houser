require('dotenv').config();
const express = require('express'); //express is a back-end server framework 
const controller = require('./controller');
const massive = require('massive'); //massive is how we connect to our database and use SQL commands

const app = express();
app.use(express.json()); //express.json is built in middleware, turning request from JSON back into the function so it can be parsed. Axios prefers to send data as JSON, but it needs to be converted back before it reaches the endpoint.

const {CONNECTION_STRING, SERVER_PORT} = process.env; //deconstructing from the .env file at the root

massive(CONNECTION_STRING).then((dbInstance) => {
   app.set('db', dbInstance) //the value of 'db' here is dbInstance. 
   console.log('connected to database')
   app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
   // proxy should be set to run on the same port that nodemon is running on. 
   //"proxy": "http://localhost:4000" 
})


// ENDPOINTS
app.get(`/api/inventory`, controller.getAll)

app.post(`/api/inventory`, controller.createItem)

app.delete(`/api/inventory/:id`, controller.deleteItem)


