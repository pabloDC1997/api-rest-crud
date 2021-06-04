module.exports = function(baseMapping, server, connection, Joi) {

    const mMapping = 'aluno'
    const endpoint = '/' + baseMapping + '/' + mMapping;

    //CREATE ALUNO
    server.route({
        method: 'POST',
        path: endpoint,
        handler: function(request, reply) {
            console.log("POST : " + server.info.uri + request.path)

            const nome = request.payload.nome;
            const matricula = request.payload.matricula;

            var response;

            const sql = require('./sql/create_aluno')(nome, matricula);
            console.log('BANCO : ' + sql);

            connection.query(sql,
                function(error, results, fields) {
                    if (error) throw error;
                    var aux = { user: results };
                    reply(results);
                }
            );
        },
        config: {
            validate: {
                payload: {
                    nome:       Joi.string().required(),
                    matricula:  Joi.number().required()
                }
            }
        }
    });

    //READ ALUNO
    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            console.log("GET : "  + server.info.uri + request.path)
            const sql = require('./sql/read_aluno')();
            console.log('BANCO : ' + sql);
            connection.query(sql,
                function(error, results, fields) {
                    if (error) throw error;
                    reply(results);
                });
        }
    });

    // UPDATE ALUNO
    server.route({
        method: 'PUT',
        path: endpoint,
        handler: function(request, reply) {
            console.log("PUT : " + server.info.uri + request.path)

            const nome = request.payload.nome;
            const matricula = request.payload.matricula;

            var response;

            const sql = require('./sql/update_aluno')(nome, matricula);
            console.log('BANCO : ' + sql);

            connection.query(sql,
                function(error, results, fields) {
                    if (error) throw error;
                    var aux = { user: results };
                    reply(results);
                }
            );
        },
        config: {
            validate: {
                payload: {
                    nome:       Joi.string().required(),
                    matricula:  Joi.number().required()
                }
            }
        }
    });

    // DELETE ALUNO
    server.route({
        method: 'DELETE',
        path: endpoint,
        handler: function(request, reply) {
            console.log("DELETE : "  + server.info.uri + request.path)

            const matricula = request.payload.matricula;
            const sql = require('./sql/delete_aluno')(matricula);
            console.log('BANCO : ' + sql);

            connection.query(sql,
                function(error, results, fields) {
                    if (error) throw error;
                    reply(results);
                });
        },
        config: {
            validate: {
                payload: {
                    matricula:  Joi.number().required()
                }
            }
        }
    });

}