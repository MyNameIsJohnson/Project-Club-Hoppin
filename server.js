const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./models');
const routes = require('./routes')


// ----------------- Initialize

app.listen(PORT, ()=> console.log(`Hello Mr. Pimp Juice your port is ${PORT}`))
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Pimp Juice'));
app.use('/api/v1', routes.api)
