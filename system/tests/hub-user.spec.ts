var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('HubUser unit tests:', () => {
    it('Should create a HubUser instance', (done: Function) => {
        api.post('/customer-users').send({}).expect(200, done);
    });
});
