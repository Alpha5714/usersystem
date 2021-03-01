const express = require('express');

const regis = require('../controller/register');

const app = express.Router();

app.get('/register',regis().index);
app.post('/register',regis().post);

module.exports=app;