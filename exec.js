//child_process allows external processes
const cp = require('child_process')

//open an external link
cp.exec("open http://www.linkedin.com/learning")

//open a terminal
cp.exec('open -a Terminal .')

//execute ls to see list of dirs/files
cp.exec('ls', (err, data, stderr)=>{
    if(err){
        //error thrown by cmd
        console.log(stderr)
        //error thrown by nodejs
        throw err;
    }
    console.log(data)
})

//execute other js files
cp.exec('node readStream', (err, data, stderr)=>{
    console.log(data)
})