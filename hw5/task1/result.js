const EventEmitter = require('events');
const result = new EventEmitter();

result.on('result', (func)=>{
    return func;    
});

module.exports = {
    result,
}
