const express=require('express')
const router= express.Router()
const {create,remove} =require('../controller/exercise')

router.route('/create-exercise').post(create)
router.route('/remove-exercise/:id').delete(remove)


module.exports = router