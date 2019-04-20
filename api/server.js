const express = require('express')

const games = require('../games/gamesModel.js')

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'hello' })
})

server.get('/games', async(req, res) => {
    const allGames = await games.getAll();

    res.status(200).json(allGames);
})


server.post('/games', async(req, res) => {
    let {title, genre, releaseYear } = req.body;
    if(!title || !genre) {
        return res.status(422).json({ error: 'You forgot to add the title and genre' })
    }
    else {
        const newGame = await games.insert({ title, genre, releaseYear });

        res.status(201).json({newGame})
    }
})
module.exports = server;