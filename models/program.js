const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
    programID: {
        type: String,
        required: true,
        unique: true
    },
    programName: {
        type: String,
        required: true,        
    },
    exercises:{
        type:[String],
        required:true
    }

},{timestamps: true})

module.exports = mongoose.model("Program", programSchema)