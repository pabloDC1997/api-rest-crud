module.exports = function(baseMapping, server, connection, Joi) {

    const mMapping = 'curso'
    const endpoint = '/' + baseMapping + '/' + mMapping;

    //CREATE CURSO
    server.route({
        method: 'POST',
        path: endpoint,
        handler: function(request, reply) {
            console.log("POST : " + server.info.uri + request.path)

            const nome = request.payload.nome;
            const codigo = request.payload.codigo;

            var response;

            const sql = require('./sql/create_curso')(nome, codigo);
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
                    codigo:     Joi.string().required()
                }
            }
        }
    });

    //READ CURSO
    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            console.log("GET : "  + server.info.uri + request.path)
            const sql = require('./sql/read_curso')();
            console.log('BANCO : ' + sql);
            connection.query(sql,
                function(error, results, fields) {
                    if (error) throw error;
                    reply(results);
                });
        }
    });

    // UPDATE CURSO
    server.route({
        method: 'PUT',
        path: endpoint,
        handler: function(request, reply) {
            console.log("PUT : " + server.info.uri + request.path)

            const nome = request.payload.nome;
            const codigo = request.payload.codigo;

            var response;

            const sql = require('./sql/update_curso')(nome, codigo);
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
                    codigo:  Joi.string().required()
                }
            }
        }
    });

    // DELETE CURSO
    server.route({
        method: 'DELETE',
        path: endpoint,
        handler: function(request, reply) {
            console.log("DELETE : "  + server.info.uri + request.path)

            const codigo = request.payload.codigo;
            const sql = require('./sql/delete_curso')(codigo);
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
                    codigo:  Joi.string().required()
                }
            }
        }
    });

}