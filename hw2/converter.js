globalThis.converter=function(arr){
    let newObject={};
    let counter = 0;    
    arr.forEach((element,index) => {      
          if(index %2 ===0){
            newObject[arr[index]] = arr[index+1];
            counter++;
          }          
    });

    arr.length % 2 ===0?true:newObject[arr[arr.length-1]]= null;
    newObject["length"] = counter;  
    
    return newObject;
};
