require('dotenv').config();
const express = require('express');

const users = require('./api/users');
const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Node with Postgres!'));
server.use('/users', users);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));