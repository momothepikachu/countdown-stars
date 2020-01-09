const cp = require('child_process')
let count = 0
const answers = ['momo', 'sleeping', 'js']
//first param is command, second param is an array of following arguments
const questionApp = cp.spawn('node', ['questions.js'])

//catch any data spitted out from the questionApp terminal
questionApp.stdout.on('data', data=>{
    const answer = answers[count]
    questionApp.stdin.write(`${answer} \n`)
    count++
    console.log(`from the question app: ${data} ${answer} \n`)
})

//listen when questionApp closes
questionApp.on('close', ()=>{
    console.log('questionApp process exited')
})