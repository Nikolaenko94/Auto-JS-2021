let devide = require('./devide');
let minus = require('./minus');
let multiplication = require('./multiplication');
let plus = require('./plus');
let result = require('./result');


//devide-function tests
test('Devide. If have setTimeot - one ',()=>{   
    jest.useFakeTimers();  
    devide.devide();   
    expect(setTimeout).toHaveBeenCalledTimes(1);    
});
test('Devide. If have setTimeot 1100 ',()=>{   
    jest.useFakeTimers();  
    devide.devide();   
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1100);    
});
//plus-function tests
test('plus. If have setTimeot - one ',()=>{   
    jest.useFakeTimers();  
    plus.plus();   
    expect(setTimeout).toHaveBeenCalledTimes(1);    
});
test('plus. If have setTimeot 1200 ',()=>{   
    jest.useFakeTimers();  
    plus.plus();   
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1200);    
});
//multiplication-function tests
test('multiplication. If have setTimeot - one ',()=>{   
    jest.useFakeTimers();  
    multiplication.multiplication();   
    expect(setTimeout).toHaveBeenCalledTimes(1);    
});
test('multiplication. If have setTimeot 900 ',()=>{   
    jest.useFakeTimers();  
    multiplication.multiplication();   
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 900);    
});
//minus-function tests
test('minus. If have setTimeot - one ',()=>{   
    jest.useFakeTimers();  
    minus.minus();   
    expect(setTimeout).toHaveBeenCalledTimes(1);    
});
test('minus. If have setTimeot 1400 ',()=>{   
    jest.useFakeTimers();  
    minus.minus();   
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1400);    
});
