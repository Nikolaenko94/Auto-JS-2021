const Calculator = require("../../app/calculator.js");
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = require("chai");
chai.use(spies);

describe("Subtract method unit testing:", function(){
    let calculator;
    
    beforeEach(()=>{
        calculator = new Calculator.Calculator();
    });
    afterEach(()=>{
        calculator = null;
    });
    it('should return 0 when called: subtract(15,15)',function(){
        expect(calculator.subtract(15,15)).to.equal(0);
    });
    it('should return -1 when called: subtract(15,16)',function(){
        expect(calculator.subtract(15,16)).to.equal(-1);
    });
    it('should return 31 when called: subtract(15,-16)',function(){
        expect(calculator.subtract(15,-16)).to.equal(31);
    });
    it('should return -31 when called: subtract(-15,16)',function(){
        expect(calculator.subtract(-15,16)).to.equal(-31);
    });
    it('should return 1 when called: subtract(-15,-16)',function(){
        expect(calculator.subtract(-15,-16)).to.equal(1);
    });
    it('should return Error when called: subtract(152,false)',function(){
        let message = () =>  calculator.subtract(152, false);       
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: subtract(null,14)',function(){
        let message = () =>  calculator.subtract(null, 14);       
        expect(message).to.throw("Invalid data type");
    });
});