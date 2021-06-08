const axios = require("axios").default;
const chai = require("chai");
const { expect } = require("chai");

describe("[GET]PHOTOS", function(){
   
    it('should return success status [200, "OK"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([200, "OK"]);                           
                        
    });
    it('should return data length (count photos = 5000)',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect(result.data.length).to.equal(5000);          
    });
    it('should return keys for users data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        const keys = ['albumId', 'id', 'title', 'url','thumbnailUrl'];
        //act
        const result = await axios.get(URL);
        const user = result.data[0];
        //assert                          
        await expect(Object.keys(user)).to.eql(keys);          
    });
    it('should return headers length = 25',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect(Object.keys(result.headers).length).to.equal(25);          
    });
});

describe("[POST]PHOTOS", function(){   
    it('should return success status [201, "Created"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([201, "Created"]);                           
                        
    });
    it('should return key for user data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        const keys = ['id'];
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(Object.keys(result.data)).to.eql(keys);          
    });
    it('should return value id for user data = 5001',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(result.data.id).to.equal(5001);          
    });
    it('should return headers length = 26',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/photos';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(Object.keys(result.headers).length).to.equal(26);          
    });
});