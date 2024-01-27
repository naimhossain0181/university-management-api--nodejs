import jwt from 'jsonwebtoken'
import extractToken from "../utilitis/extractToken.js";

export const adminAuthVerification = async (req,res,next,ad)=>{
    const token=await extractToken(req.header('Authorization')) //split bearer from Authorization token
    console.log(ad)
}


