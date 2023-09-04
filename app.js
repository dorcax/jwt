const express =require("express")
const app = express()
const connectDb = require("./connectDb/connect")
const router = require("./Router/route")
require("dotenv").config()
const port = process.env.PORT || 5000
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/v1", router)


const start = async() => {
    await connectDb(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}
start()