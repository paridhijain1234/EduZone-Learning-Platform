const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    }
});

const User = mongoose.model("user-data",userSchema)

module.exports = User;