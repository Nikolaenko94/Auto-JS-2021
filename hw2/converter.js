globalThis.converter=function(arr){
    let newObject={};
    let keyBox = [];
    let valueBox = [];
  
    keyBox = arr.map((element,index)=>index%2===0?element:false);
    valueBox = arr.map((element,index)=>index%2===0?false:element);
    keyBox.forEach((element,index)=> element === false?keyBox.splice(index,1):true);
    valueBox.forEach((element,index)=> element === false?valueBox.splice(index,1):true);
 
    valueBox.length !== keyBox.length ? valueBox.push(null): true;
    valueBox.push(keyBox.length);
    keyBox.push("length");  
    
    for(let i = 0; i < keyBox.length;i++){
      newObject[keyBox[i]] = valueBox[i];        
    };
     
    return newObject;
};
