const express = require('express');
const DB = require('./db');
const usersRouter = express.Router();


const db = new DB();

// GET /users/
usersRouter.get('/', async (req, res) => {
    const users = await db.getUsers();
    res.json(users);
});

// POST /users/7
/*usersRouter.post('/:id', async (req, res) => {
    const users = await db.createUsers();
    res.json(users);
});*/

module.exports = usersRouter;