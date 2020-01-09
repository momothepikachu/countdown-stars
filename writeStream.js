const fs = require('fs')

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8')
const readStream = fs.createReadStream('./assets/lorum.md', 'UTF-8')

writeStream.write('hello')
writeStream.write(' world\n')

//same as: readStream.pipe(writeStream);
readStream.on('data', data=>{
    writeStream.write(data)
})

process.stdout.write('hello')
process.stdout.write(' world\n')

//same as: process.stdin.pipe(writeStream)
process.stdin.on('data', data=>{
    writeStream.write(data)
})

