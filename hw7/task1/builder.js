class Builder {
    constructor(string){
        this.string = string;
    }
    append(data){
        this.string += data;        
    };    
    build(){
        throw new Error(`В ${this.constructor.string} не описан метод Builder()`);
    };
};

module.exports = {
    Builder,
}