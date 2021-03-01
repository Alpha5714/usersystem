//require packages
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const register = require('./routes/register');
const login = require('./routes/login');

//variable assigned to express
const app =express();

app.set('view engine','ejs'); //view engine
app.use(bodyparser.urlencoded({urlencoded:false})); //middleware for parsing json objects NOTE:This is optional



mongoose.connect('mongodb+srv://test:1234@cluster0.mz7zm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


app.get('/',(req,res)=>{
    res.render('home')
})
app.use(register);
app.use(login);


app.listen(3000);