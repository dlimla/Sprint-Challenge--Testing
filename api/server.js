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
module.exports = server;