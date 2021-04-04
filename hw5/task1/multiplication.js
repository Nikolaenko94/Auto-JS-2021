function multiplication (first,second){    
    setTimeout(() => {
        console.log("multiplication");
        console.log(Number(first) * Number(second));
        return Number(first) * Number(second);
    }, 900);    
};

module.exports = {
    multiplication,
}
