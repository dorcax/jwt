const mongoose = require("mongoose")


const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
     .then(() => {
        console.log("Database connected")
    }).catch((error) => {
        console.log("Database closed")
    })
    
}
module.exports=connectDb