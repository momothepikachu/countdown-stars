//depends on if the website is https or http
const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Snoopy',
    method: 'GET'
};

//request method needs options
const request = https.request(options, res => {
    let responseBody = '';
    //ensures the data is string
    res.setEncoding('UTF-8');

    res.on('data', data => {
        console.log('--chunk--', data.length);
        responseBody += data;
    });

    res.on('end', () => {
        fs.writeFile('./snoopy.html', responseBody, err => {
            if (err) {
                throw err;
            }
            console.log('file downloaded');
        });
    });
});

request.end();

//get method only needs the url address
const get = https.get('https://en.wikipedia.org/wiki/Charlie_Brown', res => {
    let download = fs.createWriteStream('./Charlie_Brown.html');
    res.pipe(download);
    res.on('end', () => {
        console.log('Response Finished: Wiki page downloaded');
    });
});

get.end();
