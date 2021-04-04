function plus (first,second){
    setTimeout(() => {
        console.log("plus");
        console.log(Number(first)+ Number(second));
        return Number(first)+ Number(second);
    }, 1200);
};

module.exports = {
    plus,
}
