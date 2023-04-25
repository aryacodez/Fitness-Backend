const express=require('express')
const router= express.Router()

const {create,remove,update} = require('../controller/program')

router.route('/create-program').post(create)
router.route('/delete-program/:id').delete(remove)
router.route('/update-program/:id').patch(update)

module.exports = router