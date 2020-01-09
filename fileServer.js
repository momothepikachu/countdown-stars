const { createServer } = require('http');
const { createReadStream } = require('fs');
//library querystring decodes url data
const { decode } = require('querystring');

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, { 'Content-Type': type });
    createReadStream(filePath).pipe(res);
};

createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', data => {
            body += data;
        });
        req.on('end', () => {
            //decode data based on form inputs' names
            const { name, email, message } = decode(body);
            console.log(`${name + '(' + email + '): ' + message}`);
        });
    }

    switch (req.url) {
        case '/':
            return sendFile(res, 200, 'text/html', './home-page.html');
        case '/contact':
            return sendFile(res, 200, 'text/html', './contact.html');
        case '/img/alex-banks.jpeg':
            return sendFile(res, 200, 'image/jpeg', './alex-banks.jpeg');
        case '/styles.css':
            return sendFile(res, 200, 'text/css', './styles.css');
        default:
            return sendFile(res, 200, 'text/html', './404.html');
    }
}).listen(3000);
console.log('running a file folder at port 3000');
