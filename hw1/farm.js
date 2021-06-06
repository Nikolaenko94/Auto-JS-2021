// TASK 3 FOR HOMEWORK 1
function rabbitsBusiness(totalRabbits,totalMonth){
    
    let monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let totalRabbitsNumber=totalRabbits;
    let totalEveryMonth =[];
    for(let i = 0;i<totalMonth;i++){        
        if(i+1 % 2 === 0){
            totalRabbitsNumber= totalRabbitsNumber - (totalRabbitsNumber * 50 / 100);
        } else if(totalRabbits > 100){
            totalRabbitsNumber = totalRabbitsNumber - (totalRabbitsNumber * 20 / 100);
        }
        totalRabbitsNumber+=20;
        totalEveryMonth.push(monthArray[i] + ` - ${Math.floor(totalRabbitsNumber)} rabbits`);
        totalRabbitsNumber = Math.floor(totalRabbitsNumber);
    }
    
    let returnVarriable = String(totalRabbitsNumber) + " - total rabbits" + `\n` + totalEveryMonth.join();
    return returnVarriable;
}

//EXPORT function rabbitsBusiness() => use into ../index.js
module.exports = rabbitsBusiness;