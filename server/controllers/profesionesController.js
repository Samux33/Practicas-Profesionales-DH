const db=require('../db/models/index.js')

const profesionesController={
  getAll:async(req,res)=>{
    const result=await db.Profesion.findAll()
    return res.json(result)
  }
}

module.exports=profesionesController