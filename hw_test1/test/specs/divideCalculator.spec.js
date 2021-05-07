const Calculator = require("../../app/calculator.js");
const chai = require("chai");
const spies = require("chai-spies");
const { expect } = require("chai");
chai.use(spies);

describe("Divide method unit testing:", function(){
    let calculator;
    
    beforeEach(()=>{
        calculator = new Calculator.Calculator();
    });
    afterEach(()=>{
        calculator = null;
    });    
    it('should return 1 when called: divide(5,5)',function(){
        expect(calculator.divide(5,5)).to.equal(1);
    });
    it('should return -10 when called: divide(-20,2)',function(){
        expect(calculator.divide(-20,2)).to.equal(-10);
    });
    it('should return 10 when called: divide(-20,-2)',function(){
        expect(calculator.divide(-20,-2)).to.equal(10);
    });
    it('should return 0 when called: divide(-0,2)',function(){
        expect(calculator.divide(-0,2)).to.equal(0);
    });
    it('should return -10 when called: divide(20,-2)',function(){
        expect(calculator.divide(20,-2)).to.equal(-10);
    });
    it('should return 3.5 when called: divide(21,6)',function(){
        expect(calculator.divide(21, 6)).to.equal(3.5);
    });
    it('should return 0.46153846153846156 when called: divide(12,26)',function(){
        expect(calculator.divide(12,26)).to.equal(0.46153846153846156);
    });
    it('should return -0.46153846153846156 when called: divide(12,-26)',function(){
        expect(calculator.divide(12,-26)).to.equal(-0.46153846153846156);
    });
    it('should return Error when called: divide(20,0)',function(){
        let message = () => calculator.divide(20, 0);
        expect(message).to.throw("Cannot divide by zero");
    });
    it('should return Error when called: divide(20,"10")',function(){
        let message = () => calculator.divide(20, "10");
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: divide("20",10)',function(){
        let message = () => calculator.divide("20", 10);
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: divide(false,10)',function(){
        let message = () => calculator.divide(false, 10);
        expect(message).to.throw("Invalid data type");
    });
    it('should return Error when called: divide(null,10)',function(){
        let message = () => calculator.divide(null, 10);
        expect(message).to.throw("Invalid data type");
    });
});