const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    full_name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique: true
    },
    
    password:{
        type : String,
        required : true
    }
});

const User = mongoose.model("userData",userSchema)

module.exports = User;