const {Builder} = require('./builder');

class StringBuilder extends Builder{
    constructor(string){
        super(string);
    }
    delete(index, count){
        let str = this.string.substr(index,count);
        this.string = this.string.replace(str, "");
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