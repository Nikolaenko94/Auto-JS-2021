function devide (first,second){
    setTimeout(() => {
        console.log("devide");
        if(isNaN(Number(first)) || isNaN(Number(first))){
            let messageError = "Error: This line does not use a numbers";
            console.log(messageError);
            return messageError;
        };
        console.log(Number(first) / Number(second));
        return  Number(first) / Number(second);
    }, 1100);
};

module.exports = {
    devide,
};
