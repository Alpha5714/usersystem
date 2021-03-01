const express = require('express');
const login = require('../controller/login');

const app = express.Router()

app.get('/login',login().index);
app.post('/login',login().post)

module.exports = app;