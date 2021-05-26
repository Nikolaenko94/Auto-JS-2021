class Builder {
    constructor(data){
        this.data = data;
    }       
    append(editionalData){
        if(typeof this.data !== "string" && typeof this.data !== "number"){
            throw new Error(`For ${typeof this.data} - append() not available`);
        }
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