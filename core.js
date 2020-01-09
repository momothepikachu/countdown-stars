const path = require('path');
const util = require('util')
// const { log } = require('util')
// log('hello')
const v8 =  require('v8');

const dirUploads = path.join(__dirname, 'www','files','uploads')

//console.log doesn't require any libraries
console.log(dirUploads)
//util.log print out the time of the execution
util.log(path.basename(__filename));
util.log('^ the name of the current file')

util.log(v8.getHeapCodeStatistics())