import express from 'express'
import {CreateUser,UserLogin} from "../Controllers/userController.js";

const router= express.Router()

router.post('/create',CreateUser)
router.post('/login',UserLogin)
export default router