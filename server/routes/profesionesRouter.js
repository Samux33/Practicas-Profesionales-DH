const express=require('express')
const router=express.Router()
const profesionesController=require('../controllers/profesionesController.js')

router.get('/',profesionesController.getAll)

module.exports=router