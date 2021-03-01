const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const register = new Schema({
    name:{
        type:String
    },
    uname:{
        type:String
    },
    num:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports=mongoose.model('Registration',register);