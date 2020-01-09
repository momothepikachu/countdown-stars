const fs = require('fs')

//check if the directory already exists
if(fs.existsSync('storage-files')){
    console.log('already there')
}else{
//parameters: new directory's name, err callback function
    fs.mkdir('storage-files', err => {
        if(err){
            throw err;
        }
        console.log('new directory created')
    })    
}

