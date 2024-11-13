// Create web server
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');
var comments = [];

http.createServer(function(req, res) {
    // Parse the request
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname === '/') {
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else if (pathname === '/submit') {
        var comment = urlObj.query.comment;
        comments.push(comment);
        res.end('OK');
    } else if (pathname === '/get') {
        var data = querystring.stringify({
            'comments': comments
        });
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(3000, '