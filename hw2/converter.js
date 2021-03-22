function converter(array){
    let finalObject = {};
    let keyArray = [];
    let valueArray = [];   
    array.forEach((element,index)  => {              
       if(index%2 === 0 || index ===0){
           keyArray.push(array[index]);
       }else{
           valueArray.push(array[index]);
       }
    });
    if(keyArray.length > valueArray.length){
        valueArray.push(null);
    }  
    valueArray.push(keyArray.length);
    keyArray.push("length");
    for(let i = 0; i < keyArray.length;i++){
        finalObject[keyArray[i]] = valueArray[i];        
    };    
    return finalObject;
};

