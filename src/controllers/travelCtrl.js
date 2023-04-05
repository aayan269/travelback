const TravelModel = require("../models/travelModel");




const postTravelController = async (req, res) => {
    const {name,email,destination,travellers,budget}=req.body
    //console.log(name,email,destination,travellers,budget);
        try{
            const plan=new TravelModel({name,email,destination,travellers,budget})
            await plan.save()
            return res.status(201).send("Travel plan created")
        }
        catch(e){
            console.log(e.message)
            return res.send(e.message)
        }
};

const getTravelController = async (req, res) => {

        try{
            const travelsPlan=await TravelModel.find()
           
            return res.status(201).send(travelsPlan)
        }
        catch(e){
            console.log(e.message)
            return res.send(e.message)
        }
};







module.exports = {postTravelController, getTravelController  };
