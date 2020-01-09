const fs = require('fs');

//to read text, use readFileSync or readFile
fs.readFile('./pathToFile', 'UTF-8', (err, text)=>{
    //more code here
})

//when use readFile to read image, skip 'UTF-8'
fs.readFile('./pathToImg', (err, img)=>{
    if(err){
        console.log(`an error has occured: ${err.message}`)
        process.exit();
    }
    console.log('2-bit image contents read')
    console.log(img)
})