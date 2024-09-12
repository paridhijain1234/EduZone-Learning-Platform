const User = require("../models/user");



async function handleUserSignup(req, res) {
    const { full_name, email, password } = req.body;
    await User.create({
        full_name,
        email,
        password
    });
    return res.sendFile("public/index.html", { root: "client" });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;   
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).send({ message: 'Invalid email or password' });
        }
        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) {
            return res.status(401).send({ message: 'Invalid email or password' });
            }
            return res.sendFile(__dirname + '/client/public/index.html');
}




module.exports = {
    handleUserSignup,
    handleUserLogin
}