const fs = require('fs')

//before removing the directory, first remove all the files inside
fs.readdirSync('./storage').forEach(fileName=>{
    fs.unlinkSync(`./storage/${fileName}`)
})

fs.rmdir('./storage', err => {
    if(err){
        throw err;
    }
    console.log('storage diractory removed')
})