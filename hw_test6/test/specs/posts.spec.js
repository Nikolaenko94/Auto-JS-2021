const axios = require("axios").default;
const chai = require("chai");
const { expect } = require("chai");
       
describe("[GET] POSTS", function(){
    it('should return success status [200, "OK"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([200, "OK"]);          
    });
    it('should return data length',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        //act
        const result = await axios.get(URL);
        //assert                          
        await expect(result.data.length).to.equal(100);          
    });
    it('should return keys for users data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const keys = ['userId', 'id', 'title', 'body'];
        //act
        const result = await axios.get(URL);
        const user = result.data[0];
        //assert                          
        await expect(Object.keys(user)).to.eql(keys);          
    });
});
describe("[POST] POSTS", function(){
    it('should return success status [201, "Created"]',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect([result.status,result.statusText]).to.eql([201, "Created"]);       
    });
    it('should return key for user data',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const keys = ['id'];
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(Object.keys(result.data)).to.eql(keys);          
    });
    it('should return keys for headers',async function(){
        //arrange
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const keys = ['date','content-type','content-length','connection','x-powered-by',
                    'x-ratelimit-limit','x-ratelimit-remaining','x-ratelimit-reset','vary',
                    'access-control-allow-credentials','cache-control','pragma','expires',
                'access-control-expose-headers','location','x-content-type-options','etag','via',
                'cf-cache-status','cf-request-id','expect-ct','report-to','nel','server','cf-ray','alt-svc'];
        //act
        const result = await axios.post(URL);
        //assert                          
        await expect(Object.keys(result.headers)).to.eql(keys);          
    });
});