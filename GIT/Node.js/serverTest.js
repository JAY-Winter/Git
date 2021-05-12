var http  = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' :'text/palin'});
    response.write('Hello nondejs');
    response.end();
}).listen(8888);