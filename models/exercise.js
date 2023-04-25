const mongoose=require('mongoose');

const exerciseSchema = mongoose.Schema({
    exerciseID:{
        type: String,
        required:true,
        unique:true
    },
    exerciseName:{
        type: String,
        required:true,
        unique:true
    },
    duration:{
        type: Number,
        required:true
    }
},{timestamps: true})

module.exports = mongoose.model("Exercise",exerciseSchema)