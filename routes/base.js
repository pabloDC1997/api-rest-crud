module.exports = function(server) {
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            const model = {
                'name': 'Rest API',
                'status': 'running',
                'version': "1.0.0",
                'description': 'Restful node'
            }
            reply(model);
            console.log("GET : " + server.info.uri + request.path)
        }
    });
}