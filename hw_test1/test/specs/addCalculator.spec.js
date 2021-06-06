const Calculator = require("../../app/calculator.js");
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = require("chai");
chai.use(spies);

describe("Add method unit testing:", function(){
    let calculator;
    
    beforeEach(()=>{
        calculator = new Calculator.Calculator();
    });
    afterEach(()=>{
        calculator = null;
    });
    it('should return 15 when called: add(7,8)',function(){
        expect(calculator.add(7,8)).to.equal(15);
    });
    it('should return -1 when called: add(7,-8)',function(){
        expect(calculator.add(7,-8)).to.equal(-1);
    });
    it('should return 1 when called: add(-7,8)',function(){
        expect(calculator.add(-7,8)).to.equal(1);
    });
    it('should return -15 when called: add(-7,-8)',function(){
        expect(calculator.add(-7,-8)).to.equal(-15);
    });
    it('should return Error when called: add(152,"14")',function(){
        let message = () =>  calculator.add(152, "14");       
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: add("152",14)',function(){
        let message = () =>  calculator.add("152", 14);       
        expect(message).to.throw("Invalid data type");
    });
})