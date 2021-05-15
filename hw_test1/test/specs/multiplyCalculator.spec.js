const Calculator = require("../../app/calculator.js");
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = require("chai");
chai.use(spies);

describe("Multiply method unit testing:", function(){
    let calculator;
    
    beforeEach(()=>{
        calculator = new Calculator.Calculator();
    });
    afterEach(()=>{
        calculator = null;
    });    
    it('should return 25 when called: multiply(5,5)',function(){
        expect(calculator.multiply(5,5)).to.equal(25);
    });
    it('should return 0 when called: multiply(1,0)',function(){
        expect(calculator.multiply(0,1)).to.equal(0);
    });
    it('should return 0 when called: multiply(1,-0)',function(){
        expect(calculator.multiply(1,-0)).to.equal(0);
    });
    it('should return 0 when called: multiply(-1,0)',function(){
        expect(calculator.multiply(-1,0)).to.equal(0);
    });
    it('should return 20 when called: multiply(-10,-2)',function(){
        expect(calculator.multiply(-10,-2)).to.equal(20);
    });
    it('should return -20 when called: multiply(10,-2)',function(){
        expect(calculator.multiply(10,-2)).to.equal(-20);
    });
    it('should return 0.01 when called: multiply(0.1, 0.1)',function(){
        let result = calculator.multiply(0.1, 0.1)
        expect(+result.toFixed(2)).to.equal(0.01);
    });
    it('should return Error when called: multiply(152,"14")',function(){
        let message = () =>  calculator.multiply(152, "14");       
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: multiply("152",14)',function(){
        let message = () =>  calculator.multiply(152, "14");       
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: multiply(152,null)',function(){
        let message = () =>  calculator.multiply(152, null);       
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: multiply(152,false)',function(){
        let message = () =>  calculator.multiply(152, false);       
        expect(message).to.throw("Invalid data type");
    });
});
