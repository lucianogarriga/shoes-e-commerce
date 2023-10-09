const http = require('http');

function serverCallback(request, response) {
    response.writeHead(200, {'Content-type':'application/json'});
    response.end(JSON.stringify({message:'Hello from serverr'}));
}

// CreateServer recibe una callback function
const server = http.createServer(serverCallback);

server.listen(3000, );