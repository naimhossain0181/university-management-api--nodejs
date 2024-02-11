import FeatureSchema from '../Model/featureModel.js'
import {cloudinaryFileUploader} from "../utils/coudinarySetup.js";


export const CreateFeature=async (req,res)=>{
    const {title,desc,images,details}=req.body

    try {
        if (!req.file || req.file.length<0){
            return  res.status(501).json("Please ! select/upload an Image")
        }
        if (!title){
            return  res.status(501).json("fill the title")
        }
        if (!desc){
            return  res.status(501).json("fill the desc")
        }
        if (!details){
            return  res.status(501).json("fill the details")
        }
        else {
           const result = await cloudinaryFileUploader(req.file.path,req.user.email,`featureImage${Date.now()*1000}`)
            const newFeatured= await new FeatureSchema({
                title,
                desc,
                details,
                images:{
                    url:result.secure_url,
                    publicID:result.public_id
                },
                author:req.user._id

            })
            const data= await newFeatured.save()

            return res.status(201).json({status:"feature create successfully",result:data})
        }

    }
    catch (err) {
        return  res.status(500).json({status:'Unsuccessful',message:err})
    }
}