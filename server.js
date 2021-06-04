'use strict';
const Hapi = require('hapi');
const Joi = require('joi');
const connection = require('./config/connection')();
const baseApi = 'crud';

const server = new Hapi.Server();

server.connection({
    host: '127.0.0.1',
    port: 3000
});

// importando rotas
require('./routes/base')(server);

// require('./routes/users/user')(baseApi, server, connection, Joi);

// iniciando server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});