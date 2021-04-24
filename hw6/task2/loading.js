function myPromise(){
    return new Promise((resolve, reject) => {
        let i =0 ;
        let myTime = setInterval(() => {
            let symbols = ["|","/","-","\\"];   
            console.clear();
            console.log(symbols[i]);
            i++;
            if(i === symbols.length){
                i=0;            
            }
        }, 500);
        resolve(myTime)
    })
    .then((myTime)=>
    setTimeout(() => { 
        console.clear()
        console.log("I replace loading symbols")  
        clearInterval(myTime)    
    }, 2500))
}

module.exports = {
    myPromise       
};
