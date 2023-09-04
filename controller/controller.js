const User = require("../Model/model")
const jwt =require("jsonwebtoken")
const { StatusCodes } = require("http-status-codes")

const getUser = async (req, res) => {
    try {
      
    const user = await User.find({});
    return res.status(StatusCodes.OK).json({ user: user });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("could not get the page specified");
  }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body})
         const token = jwt.sign({ userId:user._id,user:user.username }, process.env.SECRET, {
           expiresIn: "30d",
         });
      return res.status(StatusCodes.CREATED).json({ User: user,token:token });
    } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json("could not creat a post User ")
  }
  


  
}

module.exports = {
    createUser,
    getUser
}
