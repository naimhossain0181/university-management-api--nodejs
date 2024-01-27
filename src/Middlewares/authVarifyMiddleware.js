import jwt from 'jsonwebtoken'
import 'dotenv/config'
import extractToken from "../utilitis/extractToken.js";
import UserSchema from '../Model/userModel.js'
export const signInRequired = async (req,res,next)=>{
    const token=await extractToken(req.header('Authorization')) //split bearer from Authorization token
    try{
        if(!token || token===null){
            return res.status(401).json({status: "Unauthorized Action"})
        }
        else{
            const decoded=jwt.verify(token,process.env.PrivateKey)
            const user=await UserSchema.findById(decoded._id,{'password':0})
            console.log(user)
            req.user=user
            next()
        }
    }
    catch (err) {
        return res.status(501).json({status:"token has been expired" ,message:err})
    }

}
export const allowTo = (...roles)=>{
    return async (req,res,next)=>{
        if (!roles.includes(req.user.role)){
            return res.status(401).json({status:'Failed! You are Not allow to this route' })
        }
        next()
    }
}


