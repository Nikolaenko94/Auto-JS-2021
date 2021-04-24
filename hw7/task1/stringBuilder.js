const {Builder} = require('./builder');

class StringBuilder extends Builder{
    constructor(string){
        super(string);
    }
    delete(index, count){       
        let deleteResult = this.string.slice(index, index + count);
        return deleteResult;        
    }
    toString(){
        return this.string;
    }
    build(){
        return new StringBuilder(this);
    }
};

module.exports = {
    StringBuilder,
};