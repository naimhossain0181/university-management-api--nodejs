import express from 'express'
import {CreateFeature} from "../Controllers/featureController.js";
import {adminAuthVerification} from "../Middlewares/authVarifyMiddleware.js";
const router= express.Router()

router.get("/",adminAuthVerification,(req,res)=>{
    res.send("Work")
})
router.post("/create",CreateFeature)
export  default  router