const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const server = restify.createServer({
    'name': 'digitalocean',
    'version': '1.0.0'
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.bodyParser());
const cors = corsMiddleware({ origins: ['*'] });
server.pre(cors.preflight);
server.use(cors.actual);

require('./routes/index')(server);

server.listen(1338);

console.log("Server Status: \nServeren er online");