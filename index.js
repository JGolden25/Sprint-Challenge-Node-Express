const express = require('express');
const Routes = require('./Routes/Routes.js');
const actionsRoutes = require('./actionsRoutes/actionsRoutes.js');
const port = 8000;

const server = express();
server.use(express.json());

server.use('/projects', Routes);
server.use('/actions', actionsRoutes);


server.listen(port, () => console.log(`===${port} is online!===`))