var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('DeviceApp unit tests:', () => {
    it('Should create a DeviceApp instance', (done: Function) => {
        api.post('/device-apps').send({}).expect(200, done);
    });
});
