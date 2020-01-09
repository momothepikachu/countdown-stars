const fs = require('fs')

const md = `
# This is a new file

We can write text to a file with fs.writeFile

*fs.readdir
*fs.readFile
*fs.writeFile

`;

//parameters: path, content, callback function if there's error
fs.writeFile('./notes.md', md.trim(), err => {
    if(err){
        throw err;
    }
    console.log('file saved')
})