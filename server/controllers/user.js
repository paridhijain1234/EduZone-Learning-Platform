const User = require("../models/user");

async function handleUserSignup(req,res){
    const {name , password} = req.body;
}



module.exports{
    handleUserSignup,
    handleUserLogin
}