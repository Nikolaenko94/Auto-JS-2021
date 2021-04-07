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
asyncFn = function (){
            setTimeout(() => {
                console.clear();
                console.log("|");        
                setTimeout(() => {
                    console.clear();
                    console.log("/");            
                    setTimeout(() => {
                        console.clear();
                        console.log("-");                
                        setTimeout(() => {
                            console.clear();
                            console.log("\\");                    
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
}


const loading = (func) => new Promise(
    (resolve) => setTimeout(() => {
        console.clear();
        console.log("I replace loading symbols");
    }, 3000)
);



module.exports = {
    loading,
    asyncFn,
};
