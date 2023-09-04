const User = require("../Model/model")
const jwt = require("jsonwebtoken")
const {StatusCodes} =require ("http-status-codes")



const auth = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(StatusCodes.UNAUTHORIZED).json("not authenticated ")
    }
    const token =authHeader.split(" ")[1]
    try {
        const payload = jwt.verify(token, process.env.SECRET)
        req.user ={userId:payload.userId,name:payload.username}
        next()
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json("authenticated invalid dear ")
    }
}
module.exports =auth