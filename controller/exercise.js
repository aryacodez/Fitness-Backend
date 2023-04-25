const Exercise = require('../models/exercise')

exports.create = (async(req,res)=>{
    try{
        const {exerciseID,exerciseName,duration} = req.body

        if(!exerciseID||!exerciseName||!duration){
            return res.status(400).json({
                success:false,
                msg:"Input Missing"
            })
        }
        const exercise = await Exercise.create({
            exerciseID,
            exerciseName,
            duration
        })

        return res.status(200).json({
            success:true,
            exercise
        })
    }catch(e){
        console.log(e)
    }
})

exports.remove = (async(req,res)=>{
    try{
        const exercise = await Exercise.findById({_id:req.params.id});
        if(exercise.length===0){
            return res.status(400).json({
                success:false,
                msg:"Exercise Not Present"
            })
        }
        await Exercise.findByIdAndDelete({_id:req.params.id})
        return res.status(200).json({
            success:true,
            msg:"Exercise Deleted Successfully"
        })

    }catch(e){ 
        console.log(e)
    }
})