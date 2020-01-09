const http = require('http');

http.createServer((req, res) => {
    //sends out plain text
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World');

    //or sends out html
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(`
        <html>
            <head>
                <title>Hollow World</title>
            </head>
            <body>
                <h1>Hello world!</h1>
                <p>method: ${req.method}</p>
                <p>url: ${req.url}</p>
            </body>
        </html>
    `);
}).listen(3000);

console.log('Web server listening on port 3000');
