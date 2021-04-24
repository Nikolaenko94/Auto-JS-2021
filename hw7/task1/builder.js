class Builder {
    constructor(string){
        this.string = string;
    }
    append(data){
        this.string += data;        
    };    
    build(){
        throw new Error(`Inside the ${this.constructor.string} - Builder() not described`);
    };
};

module.exports = {
    Builder,
}