import FeatureSchema from '../Model/featureModel.js'


export const CreateFeature=async (req,res)=>{
    const {title,desc,details}=req.body
    try {
        const newFeatured= await new FeatureSchema({
            title,
            desc,
            details,
            author:"65b386f8fef88af4c46da2cc"

        })
        const data= await newFeatured.save()

        return res.status(201).json({status:"feature create successfully",result:data})
    }
    catch (err) {
        return  res.status(500).json({status:'Unsuccessful',message:err})
    }
}