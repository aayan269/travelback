const {Schema,model}=require("mongoose")

const travelSchema=new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    travellers: { type: Number, required: true },
    budget: { type: Number, required: true },

},{timestamps:true})

const TravelModel=model("travel",travelSchema)
module.exports=TravelModel
