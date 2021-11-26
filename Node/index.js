const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
const userRoutes = require('./routes/user');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use('/users', userRoutes);

const port= process.env.PORT || 3000;
app.listen(port,()=> console.log(`Server listening on port ${port}`));