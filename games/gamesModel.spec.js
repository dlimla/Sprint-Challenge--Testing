const Games = require('./gamesModel.js');

const db = require('../data/dbConfig');


describe('the insert fn', () => {
    beforeEach(()=> {
        return db('games').truncate();
    })

    it('should insert a game into the db', async () => {
        await Games.insert({
            title: 'Thief',
            genre: 'stealth',
            releaseYear: 2014
        })

        const games = await db('games');

        expect(games.length).toBe(1);
        expect(games[0].title).toBe('Thief');
    })

    it('should insert a game with an id', async () => {
        const games = await Games.insert({
            title: 'Thief',
            genre: 'stealth',
            releaseYear: 2014
        })

        expect(games.id).toBe(1);
        expect(games.title).toBe('Thief');
    })
})

describe('the getAll fn', async () => {
    beforeEach(()=> {
        return db('games').truncate();
    })

    it('should get all games in the db', async () => {
        await db('games').insert([
            { title: 'Mario', genre: 'arcade', releaseYear: 3242 }
        ])

        const games = await Games.getAll();

        expect(games.length).toBe(1);
        expect(games[0].title).toBe('Mario');
        expect(games[0].id).toBe(1);
    })

})