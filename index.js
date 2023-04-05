require("dotenv").config()
const PORT=process.env.PORT
const express=require("express")
const connect=require("./config/db")
 const userRoute=require("./src/routes/userRoutes")
 const travelRoute=require("./src/routes/travelRoutes")
const cors=require("cors")

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


  app.use("/user",userRoute)
app.use("/travel",travelRoute)


app.listen(PORT,async ()=>{
    await connect()
    console.log("server is running on port 8080")
})
