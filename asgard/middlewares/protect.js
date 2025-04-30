const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({message: "Autorization Required"})
}


module.exports = protect;