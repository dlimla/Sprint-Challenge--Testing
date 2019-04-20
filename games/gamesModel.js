const db = require('../data/dbConfig.js');

module.exports = {
    // insert,
    getAll
}

async function insert() {
    return null
}

async function getAll() {
    return db('games');
}