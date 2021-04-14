function minus (first,second){
    setTimeout(() => {
        console.log("minus");
        console.log(Number(first) - Number(second));
        return Number(first) - Number(second);
    }, 1400);
}

module.exports = {
    minus,
};
