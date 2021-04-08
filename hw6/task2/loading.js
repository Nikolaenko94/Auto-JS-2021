//The first way (I like it better), it doesn't accept a function, but it clearly follows step by step.
// const loading = (ms) => new Promise(
//     (resolve) => setTimeout(resolve,ms)
// );
// loading(500)
//     .then(()=>{        
//         console.log("|");
//         return loading(500);
//     })
//     .then(()=>{
//         console.clear();
//         console.log("|");
//         return loading(500);
//     })
//     .then(()=>{
//         console.clear();
//         console.log("/");
//         return loading(500);
//     })
//     .then(()=>{
//         console.clear();
//         console.log("-");
//         return loading(500);
//     })
//     .then(()=>{
//         console.clear();
//         console.log("\\");
//         return loading(500);
//     })
//     .then(()=>{
//         console.clear();
//         console.log("I replace loading symbols");
//         return loading(500);
//     });

//The second way 
let i =0 ; 
const asyncFn = function(){    
            setTimeout(function() {
            let symbols = ["|","/","-","\\"];   
            console.clear();
            console.log(symbols[i]);
            i++;
            if(i === symbols.length){return}
            asyncFn();   
}, 500);
};

const loading = (func) => new Promise(
    (resolve) => setTimeout(() => {
        console.clear();
        console.log("I replace loading symbols");
    }, 2500)
);

module.exports = {
    loading,
    asyncFn,   
};
