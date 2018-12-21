require('dotenv').config();
const express = require('express');
const controller = require('./controller');
const massive = require('massive');

const app = express();
app.use(express.json()); //Built in Middleware, turning request from JSON back into the function so it can be parsed. Axios prefers to send data as JSON, but it needs to be converted back before it reaches the endpoint.

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING).then((dbInstance) => {
   app.set('db', dbInstance) //the value of 'db' is dbInstance
   console.log('db connected')
})


// ENDPOINTS
app.get(`/api/inventory`, controller.getAll)

app.post(`/api/inventory`, controller.createItem)

app.delete(`/api/inventory/:id`, controller.deleteItem)








app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on rome`));
// proxy should be set to run on the same port that nodemon is running on. 
//"proxy": "http://localhost:4000"