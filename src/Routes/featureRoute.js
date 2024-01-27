import express from 'express'
import {CreateFeature} from "../Controllers/featureController.js";
import {signInRequired,allowTo} from "../Middlewares/authVarifyMiddleware.js";
const router= express.Router()

router.get("/",signInRequired,allowTo('admin','student'),(req,res)=>{
    res.send("Work")
})
router.post("/create",signInRequired,allowTo('admin','teacher'),CreateFeature)
export  default  router