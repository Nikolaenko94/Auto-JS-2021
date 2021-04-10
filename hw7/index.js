//import task 1 
const { StringBuilder } = require('./task1/stringBuilder');

//usage task 1
const hellobuilder = new StringBuilder('HH');
hellobuilder.append('el')
hellobuilder.append('lo')
hellobuilder.delete(1,1)
hellobuilder.build()         
console.log(hellobuilder.toString());