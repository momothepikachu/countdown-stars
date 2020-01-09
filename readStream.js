const fs = require('fs')

const readStream = fs.createReadStream('./assets/lorum.md','UTF-8')

let fileText = '';

//read the long text bit by bit via createReadStream
readStream.on('data', data=>{
    console.log(`I read ${data.length -1} characters of lorum.md.`)
    fileText +=data
})

//read the whole text
readStream.once('data', data=>{
    console.log(data)
})

//listen to the end event of readstream
readStream.on('end', ()=>{
    console.log(`In total I read ${fileText.length} characters of text.`)
    console.log('\n\n\ntype something...')
})

process.stdin.on('data', data=>{
    console.log(`I read ${data.length -1} characters of text.`)
})

