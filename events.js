const events = require('events')
const emitter = new events.EventEmitter();

emitter.on('customEvent', (msg, user)=>{
    console.log(`${user}: ${msg}`)
})

process.stdin.on('data', data=>{
    const input = data.toString().trim();
    if(input ==="exit"){
        emitter.emit("customEvent", "Goodbye", "process");
        process.exit();
    }
    emitter.emit('customEvent', input, 'terminal')
})

// emitter.emit('customEvent', 'Hello World', 'Computer')
// emitter.emit('customEvent', 'Thats pretty cool huh', 'momo')