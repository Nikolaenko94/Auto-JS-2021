//TASK 3
//MODULE CAR !
let Car = (function(){
    let engine = "S54B32";
    let consumption = 20;
    let tank = 50;
    let myFuel = 10;
    let doneDistance = 0;
    
    return{
        //first public method
        goToDistance(distance){            
            let consumptionEveryKm = consumption / 100;            
            for(let i = 1; i <= distance;i++){               
                myFuel -= consumptionEveryKm;
                doneDistance++;                
                //if trip done                      
                if(i === distance){
                    return("Вы прибыли на место назначения");
                };
                //if fuel off 
                if(myFuel - consumptionEveryKm <=0){
                    return(`ВНИМАНИЕ: закончилось топливо, вы проехали: ${doneDistance} км.`);
                };               
                //use distance for fuel station
                    //gasolinestation 1
                if(i === 20){
                    this.refill(BelarusNeft1);
                }
                    //gasolinestation 2
                if(i === 50){
                    this.refill(BelarusNeft2);
                }
                    //gasolinestation 3
                if(i === 100){
                    this.refill(Lucoil);
                    
                }
                    //gasolinestation 4
                if(i === 130){
                    this.refill(SlavNeft);
                }                     
            }
        },

        //second public function
        refill(litters){
            isNaN(litters)?litters=0:true;            
            myFuel += GasolineStation.refuel(litters);
            //if there is not enough space in the tank
            if(myFuel > tank){
                myFuel = 50;
            }
            return myFuel;            
        },
    }
})();
//MODULE GASLINESTATION
let GasolineStation = (function (){    
    return{
        refuel(liters){
            return liters;
        }
    }
})();
//GASLINESTATIONS
const BelarusNeft1 = 10;
const BelarusNeft2 = 5;
const Lucoil = 10;
const SlavNeft = 5;

//EXPORT
module.exports = {
    Car,
    GasolineStation,
}
