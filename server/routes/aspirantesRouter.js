const express=require('express')
const router=express.Router()
const aspirantesController=require('../controllers/aspirantesController.js')

router.get('/',aspirantesController.getAll)
router.post('/',aspirantesController.create)

module.exports=router