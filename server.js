// Creating a Server -- calling the expression function
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

// ----------------- Initializing Database (Models)
const db = require('./models');
// ----------------- Initializing Routes
const routes = require('./routes')

app.use(express.static(__dirname + '/public'));
// ----------------- Initializing Body Parser
app.use(bodyParser.json());
// ----------------- Initialize (telling the server to start listening)
app.listen(PORT, ()=> console.log(`Hello your port is ${PORT}`))


app.get('/', (req, res) => res.send('Hello I am a Server'));
app.use('/api/v1', routes.api)
