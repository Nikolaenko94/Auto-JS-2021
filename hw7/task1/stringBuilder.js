const {Builder} = require('./builder');

class StringBuilder extends Builder{
    constructor(data){
        super(data);
    }
    delete(index, count){       
        let deleteResult = this.data.slice(index, index + count);
        return deleteResult;        
    }
    toString(){
        return this.data;
    }
    build(){
        return new StringBuilder(this);
    }
};

module.exports = {
    StringBuilder,
};