const express=require("express")
const { postTravelController, getTravelController } = require("../controllers/travelCtrl")
const app=express.Router()

app.post('/create',postTravelController)
app.get('/get',getTravelController)

module.exports=app