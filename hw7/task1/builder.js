class Builder {
    constructor(data){
        this.data = data;
    }
    append(editionalData){
        if(typeof editionalData === typeof this.data){
            this.data += editionalData;
        }else{
            console.error("Invalid data type")
        }                
    };    
    build(){
        throw new Error(`Inside the ${this.constructor.data} - Builder() not described`);
    };
};

module.exports = {
    Builder,
}