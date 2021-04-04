function devide (first,second){
    setTimeout(() => {
        console.log("devide");
        console.log(Number(first) / Number(second));
        return  Number(first) / Number(second);
    }, 1100);
};

module.exports = {
    devide,
};
