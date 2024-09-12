const express = require("express")
const router = express.Router();

router.get("/home",(req, res) => res.sendFile(__dirname + '/client/public/index.html'));


router.get("/signup",(req,res)=>{
    return res.render("signup");
});

router.get("/login",(req,res)=>{
    return res.render("login");
});

module.exports = router;