const fs = require('fs');

//there are two ways to read directory, one is synchronous and the other is asynchronous

console.log('started reading this directory synchronously')
//synchronous execution, following steps will wait until this step is finished
const syncFiles = fs.readdirSync('./lib')
console.log('complete readdirSync')
console.log(syncFiles)




//asynchronous execution with a callback function
fs.readdir('./lib', (err, asyncFiles)=>{
    if(err){
        throw err;
    }
    console.log('complete readdir')
    console.log(asyncFiles)
})
console.log('started reading this directory asynchronously')

