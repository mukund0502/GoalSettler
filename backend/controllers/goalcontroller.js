const asynchandler = require('express-async-handler')
const goal = require('../models/goalmodel')
// console.log(goal);

const getgoals = asynchandler(async (req, res)=>{
    const goals = await goal.find()
    await console.log("fetched");
    res.status(200).json(goals)
})



const postgoals = asynchandler(async (req, res)=>{
    console.log(req.body);
    const goals = await goal.create({
        text: req.body.text
    })
    await console.log("Posted");
    res.status(200).json(goals)
})



const putgoals = asynchandler(async (req, res)=>{
    const goals = await goal.findById(req.params.id)
    if(!goals){
        req.status(400)
        throw new Error("Goal not found") 
    }

    const updatedgoal = await goal.findById(req.params.id, req.body, {
        new : true,
    })
    await console.log("updated");
    res.status(200).json(updatedgoal)
})



const deletegoals = asynchandler(async (req, res)=>{
    const goals = await goal.findById(req.params.id)
    if(!goals){
        req.status(400)
        throw new Error("Goal not found") 
    }

    await goals.remove
    await console.log("deleted");
    res.status(200).json(goals)
})



module.exports = {
    getgoals, postgoals, putgoals, deletegoals
}