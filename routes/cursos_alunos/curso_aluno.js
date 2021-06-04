module.exports = function(baseMapping, server, connection, Joi) {

    const mMapping = 'curso_aluno'
    const endpoint = '/' + baseMapping + '/' + mMapping;

    //CREATE CURSO_ALUNO
    server.route({
        method: 'POST',
        path: endpoint,
        handler: function(request, reply) {
            console.log("POST : " + server.info.uri + request.path)

            const matricula = request.payload.matricula;
            const codigo = request.payload.codigo;
            const frequencia = request.payload.frequencia;
            const media = request.payload.media;

            const sql = require('./sql/create_curso_aluno')(matricula, codigo, frequencia, media);
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
                    matricula:      Joi.number().required(),
                    codigo:         Joi.string().required(),
                    frequencia:     Joi.number().required(), 
                    media:          Joi.number().required(),

                }
            }
        }
    });

    //READ CURSO_ALUNO
    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            console.log("GET : "  + server.info.uri + request.path)
            const sql = require('./sql/read_curso_aluno')();
            console.log('BANCO : ' + sql);
            connection.query(sql,
                function(error, results, fields) {
                    if (error) throw error;
                    reply(results);
                });
        }
    });

    // UPDATE CURSO_ALUNO
    server.route({
        method: 'PUT',
        path: endpoint,
        handler: function(request, reply) {
            console.log("PUT : " + server.info.uri + request.path)

            const matricula = request.payload.matricula;
            const codigo = request.payload.codigo;
            const frequencia = request.payload.frequencia;
            const media = request.payload.media;

            var response;

            const sql = require('./sql/update_curso_aluno')(matricula, codigo, frequencia, media);
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
                    matricula:       Joi.number().required(),
                    codigo:         Joi.string().required(),
                    frequencia:     Joi.number().required(), 
                    media:          Joi.number().required(),
                }
            }
        }
    });

    // DELETE CURSO_ALUNO
    server.route({
        method: 'DELETE',
        path: endpoint,
        handler: function(request, reply) {
            console.log("DELETE : "  + server.info.uri + request.path)

            const matricula = request.payload.matricula;
            const codigo = request.payload.codigo;

            const sql = require('./sql/delete_curso_aluno')(matricula, codigo);
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
                    matricula:      Joi.number().required(),
                    codigo:         Joi.string().required(),
                }
            }
        }
    });

}