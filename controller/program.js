const Program = require('../models/program')
const Exercise = require('../models/exercise')

exports.create = (async (req, res) => {
    try {
        const { programID, programName, exercises } = req.body

        const arr = []
        for (const i of exercises) {
            const name = await Exercise.findOne({ exerciseName: i }).select('exerciseName -_id')
            if (name)
                arr.push(name)
            else {
                return res.status(400).json({ msg: `${i} exercise not present` })
            }
        }


        //return res.status(200).json({arr})

        const program = await Program.create({
            programID,
            programName,
            exercises: arr
        })

        return res.status(200).json({
            success: true,
            program
        })
    } catch (e) {
        console.log(e)
    }
})

exports.remove = (async (req, res) => {
    try {
        const program = await Program.findById({ _id: req.params.id });
        if (program.length === 0) {
            return res.status(400).json({
                success: false,
                msg: "Program Not Present"
            })
        }
        await Program.findByIdAndDelete({ _id: req.params.id })
        return res.status(200).json({
            success: true,
            msg: "Program Deleted Successfully"
        })

    } catch (e) {
        console.log(e)
    }
})

exports.update = (async (req, res) => {
    try {
        const { id } = req.params
        const { programName, exercises } = req.body
        if (!programName && exercises) {
            const program = await Program.findById({ _id: id })
            if (!program) {
                return res.status(400).json({ msg: "Program not present" })
            }
            // program.programName = programName
            const arr = []
            for (const i of exercises) {
                const name = await Exercise.findOne({ exerciseName: i }).select('exerciseName -_id')
                if (name)
                    arr.push(name)
                else {
                    return res.status(400).json({ msg: `${i} exercise not present` })
                }
            }
            program.exercises = arr
            const updated = await program.save()
            return res.status(200).json({
                success: true,
                updated
            })
        }
        else if(programName && !exercises){
            const program = await Program.findById({ _id: id })
            if (!program) {
                return res.status(400).json({ msg: "Program not present" })
            }
            program.programName = programName
            const updated = await program.save()
            return res.status(200).json({
                success: true,
                updated
            })
        }else{
            const program = await Program.findById({ _id: id })
            if (!program) {
                return res.status(400).json({ msg: "Program not present" })
            }
            program.programName = programName
            const arr = []
            for (const i of exercises) {
                const name = await Exercise.findOne({ exerciseName: i }).select('exerciseName -_id')
                if (name)
                    arr.push(name)
                else {
                    return res.status(400).json({ msg: `${i} exercise not present` })
                }
            }
            program.exercises = arr
            const updated = await program.save()
            return res.status(200).json({
                success: true,
                updated
            })
        }
    } catch (e) {
        console.log(e)
    }
})