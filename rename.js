const fs = require('fs')

//params: old name, new name
fs.renameSync('./assets/colors.json', './assets/colorData.json')


//params: old location, new location
fs.rename('./assets/notes.md', './storage-files/notes.md', err => {
    if(err){
        throw err;
    }
})

setTimeout(()=>{
    //delete alex.jpg
    fs.unlinkSync('./assets/alex.jpg')
},4000)