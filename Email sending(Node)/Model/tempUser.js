var mongoose = require('mongoose');

var schema_user= new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String},
    number:{type:String}

});

module.exports=mongoose.model('tempUser',schema_user);