import bcypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserSchema from "../Model/userModel.js";

export const CreateUser = async (req,res)=>{
    const {firstName,lastName,email,password}=req.body
    try{
        const hashPassword=await bcypt.hash(password,10)
        const user= await new UserSchema({
            firstName,lastName,email,password:hashPassword
        })
        const data= await user.save()
        return res.status(201).json({status:"account create successfully",result:data})
    }
    catch (err) {
       return  res.status(500).json({status:'Unsuccessful',message:err})
    }
}

export const UserLogin = async (req,res)=>{
    const {email,password}=req.body
    const user= await UserSchema.findOne({email:email})
    try {
        if(user==null || !user){
            return  res.status(500).json({status:'Unauthorized attempt!!'})
        }
        else {
            const comparePassword=await bcypt.compare(password,user.password)
            if (user && comparePassword){
                const {_id,email}=user
                const token = await jwt.sign({_id,email},process.env.PrivateKey,{expiresIn: '1h'})
                return res.status(200).json({status:"login successfully",token:token})
            }
            else {
                return res.status(401).json({status:"Unauthorized attempt!"})
            }
        }
    }
    catch (err) {
        return  res.status(500).json({status:'Operation Failed ! Try again Later',message:err})
    }

}