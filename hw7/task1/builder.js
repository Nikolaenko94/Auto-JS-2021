class Builder {
    constructor(data){
        this.data = data;
    }
    append(value){
        this.data += value;        
    };    
    build(){
        throw new Error(`Inside the ${this.constructor.data} - Builder() not described`);
    };
};

module.exports = {
    Builder,
}