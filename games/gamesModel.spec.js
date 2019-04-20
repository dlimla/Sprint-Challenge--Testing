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
})

// describe('the getAll fn', async () => {

// })