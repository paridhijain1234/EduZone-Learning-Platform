const express = require("express");
const router = express.Router();

const { handleUserSignup , handleUserLogin} = require("../controllers/user")

router.post("/",handleUserSignup)



module.exports = router;