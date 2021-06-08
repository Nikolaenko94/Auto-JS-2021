const axios = require("axios").default;
const chai = require("chai");
const { expect } = require("chai");

describe("[GET]USERS", function(){
   
    it('should return success status [200, "OK"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([200, "OK"]);                           
                        
    });
    it('should return data length (count users = 10)',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect(result.data.length).to.equal(10);          
    });
    it('should return keys for users data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        const keys = ['id','name','username','email','address','phone','website','company'];
        //act
        const result = await axios.get(URL);
        const user = result.data[0];
        //assert                          
        await expect(Object.keys(user)).to.eql(keys);          
    });
    it('should return object for address for users data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.get(URL);
        const user = result.data[0];
        //assert                          
        await expect(typeof user.address).to.equal('object');          
    });
    it('should return keys for address: street, suite, city, zipcode, geo',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        const keysForAddress = ['street','suite','city','zipcode','geo'];
        //act
        const result = await axios.get(URL);
        const user = await result.data[0];
        const addressElem = await user.address;
        //assert                          
        await expect(Object.keys(addressElem)).to.eql(keysForAddress);          
    });
    it('should return object for company for users data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.get(URL);
        const user = result.data[0];
        //assert                          
        await expect(typeof user.company).to.equal('object');          
    });
    it('should return keys for company: name, catchPhrase, bs',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        const keysForCompany = ['name','catchPhrase','bs'];
        //act
        const result = await axios.get(URL);
        const user = await result.data[0];
        const companyElem = await user.company;
        //assert                          
        await expect(Object.keys(companyElem)).to.eql(keysForCompany);          
    });
    it('should return headers length = 25',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect(Object.keys(result.headers).length).to.equal(25);          
    });
    
});

describe("[POST]USERS", function(){   
    it('should return success status [201, "Created"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([201, "Created"]);                           
                        
    });
    it('should return key for user data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        const keys = ['id'];
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(Object.keys(result.data)).to.eql(keys);          
    });
    it('should return value id for user data = 11',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(result.data.id).to.equal(11);          
    });
    it('should return headers length = 26',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/users';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(Object.keys(result.headers).length).to.equal(26);          
    });
});