const request = require('supertest');

const server = require('./server.js');

describe('the server', () => {
    it('should run the testing env', () => {
        const env = process.env.DB_ENV;

        expect(env).toBe('testing');
    })
})

describe('the GET /', () => {
    it('should return a HTTP status of 200', async () =>{
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    })

    it('should retrun JSON', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
    })

    it('should return {message: hello}', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ message: "hello" })
    })
})