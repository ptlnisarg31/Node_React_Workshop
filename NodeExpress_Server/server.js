var http = require('http');
http.createServer(function (req, res) {
    var a=10;
    var b=20;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`A value is ${a} and B value is ${b} and sum is ${a+b} </br>`);
    res.end('Bye ! Response is ended here');
}).listen(3000);
console.log("Server running at 3000 => http://localhost:3000/");