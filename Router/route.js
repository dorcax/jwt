const express = require("express")
const router = express.Router()
const { createUser, getUser } = require("../controller/controller.js");
const auth = require("../middleware/auth");

router.get("/",auth,getUser)
router.post("/login",createUser)
       

module.exports =router