const express = require('express');
const Routes = require('./Routes/Routes.js');
const port = 8000;

const server = express();
server.use(express.json());

server.listen(port, () => console.log(`===${port} is online!===`))