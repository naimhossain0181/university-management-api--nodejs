import FeatureSchema from '../Model/featureModel.js'


export const CreateFeature=async (req,res)=>{
    const {title,desc,details}=req.body
    try {
        const newFeatured= await new FeatureSchema({
            title,
            desc,
            details,
            author:req.user._id

        })
        const data= await newFeatured.save()

        return res.status(201).json({status:"feature create successfully",result:data})
    }
    catch (err) {
        return  res.status(500).json({status:'Unsuccessful',message:err})
    }
}