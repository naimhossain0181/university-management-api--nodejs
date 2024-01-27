import mongoose from 'mongoose'
 const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: function(v) {
                return v.length >= 6; // Minimum length of 6 characters
            },
            message: props => `${props.value} is shorter than the minimum allowed length of 6 characters`
        }
    },
    role:{
        type:String,
        trim:true,
        enum: ['student', 'teacher', 'admin'],
        default:'student'
    }
},{timestamps:true,versionKey:false})

const model = mongoose.model('User',UserSchema)
export  default  model