var path = require('path');
const Logger = {
    error: function(path,massage){
        console.log('\x1b[31m%s\x1b[0m',`Logger_ERROR[${path}]: ${massage}`)
    },
    warn: function(path,massage){
        console.log('\x1b[33m%s\x1b[0m',`Logger_WARN[${path}]: ${massage}`)
    },
    info: function(path,massage){
        console.log('\x1b[7m%s\x1b[0m',`Logger_INFO[${path}]: ${massage}`)
    },
    verbose: function(path,massage){
        console.log('\x1b[36m%s\x1b[0m',`Logger_VERBOSE[${path}]: ${massage}`)
    },
    debug: function(path,massage){
        console.log('\x1b[32m%s\x1b[0m',`Logger_DEBUG[${path}]: ${massage}`)
    },

}

module.exports = Logger;