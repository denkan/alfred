var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Device unit tests:', () => {
    it('Should create a Device instance', (done: Function) => {
        api.post('/devices').send({
            name: 'test',
            id: 'test'
        }).expect(200, done);
    });
});
