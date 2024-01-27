import express from 'express'
import {CreateFeature} from "../Controllers/featureController.js";
import {signInRequired,allowTo} from "../Middlewares/authVarifyMiddleware.js";
const router= express.Router()

router.get("/",signInRequired,allowTo('student','teacher'),(req,res)=>{
    res.send("Work")
})
router.post("/create",CreateFeature)
export  default  router