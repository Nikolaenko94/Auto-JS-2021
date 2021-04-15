//IMPORT METHODS FOR CALC (PLUS, MINUS, MULTIPLICATION, DEVIDE);
let devide = require('./devide');
let minus = require('./minus');
let multiplication = require('./multiplication');
let plus = require('./plus');
let result = require('./result');

//IMPORT FOR STREAM
const fs = require('fs');

//CREATE (UNION) EVENTEMITTERS FOR CALCULATOR (result as a separate event)
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('plus', plus.plus);
emitter.on('devide',devide.devide);
emitter.on('multiplication',multiplication.multiplication);
emitter.on('minus', minus.minus);
//CULCULATION START
let myInput = fs.createReadStream(__dirname + '/input.txt', 'utf8');

let funcInput = myInput.on('data', (value)=>{
    let arrInputValue = value.split('\r\n');
    arrInputValue.forEach(element => {
        if(element.includes('+')){
            let arr = element.split(' ');    
            result.result.emit('result', emitter.emit('plus', arr[0],arr[1]));           
        }
        if(element.includes('-')){
            let arr = element.split(' ');            
            result.result.emit('result', emitter.emit('minus', arr[0],arr[1]));           
        }        
        if(element.includes('/')){
            let arr = element.split(' ');            
            result.result.emit('result', emitter.emit('devide', arr[0],arr[1]));            
        }
        if(element.includes('*')){
            let arr = element.split(' ');            
            result.result.emit('result', emitter.emit('multiplication', arr[0],arr[1]));             
        }
    });     
     
});

module.exports = {
funcInput,
}