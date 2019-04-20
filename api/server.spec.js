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


describe('the GET /games', () => {
    it('should return a HTTP of 200', async () => {
        const res = await request(server).get('/games');
        expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
        const res = await request(server).get('/games');
        expect(res.type).toBe('application/json')
    })

    it('should return an array', async () => {
        const res = await request(server).get('/games');

        expect(Array.isArray(res.body)).toBe(true);
    })

})


describe('the POST /', () => {
    
    it('should return an error of 422 if missing info', async () => {
        const testGame = {
            title: 'Astros',
            releaseYear: 1929
        }

        const res = await request(server).post('/games').send(testGame);

        expect(res.status).toBe(422);
    })

    it('should retrun JSON', async() => {
        const testGame = {
            title: 'Astros',
            genre: 'arcade',
            releaseYear: 1929
        }
        const res = await request(server).post('/games').send(testGame);
        expect(res.type).toBe('application/json');
    })

    it('should return 201', async () => {
        const another = {
            title: 'Sonic',
            genre: 'arcade',
            releaseYear: 2220
        }

        const res = await request(server).post('/games').send(another);
        expect(res.status).toBe(201);
     
    })
})