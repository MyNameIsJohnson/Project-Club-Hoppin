const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./models');
const routes = require('./routes')


// ----------------- Initialize

app.listen(PORT, ()=> console.log(`port ${PORT}`))
app.use(bodyParser.json());

app.use('/api/v1', routes.api)