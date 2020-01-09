//all variables will be scoped in the file
//to export a variable use a function, like getCount
let count = 0;

const inc = ()=>++count;
const dec = ()=>--count;

const getCount = ()=>count;

module.exports = {
    inc,
    dec,
    getCount
}