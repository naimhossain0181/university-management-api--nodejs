import mongoose from 'mongoose'
const FeatureSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        trim:true,
    },
    details:{
        type:String,
        required:true,
        trim:true,
    },
    images:{
        url:{
            type:String,
            default:'https://wp-rocket.me/wp-content/uploads/1/What-is-WebP-and-how-to-use-this-image-format-in-WordPress.png'
        }
    },
    author:{
        type:mongoose.Schema.ObjectId,
        required:true
    }
})
const model = mongoose.model('Feature',FeatureSchema)
export default  model