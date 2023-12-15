import mongoose from "mongoose";
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    aadharnumber:{
        type:String,
        minlength: 12,
        maxlength: 12, 
        required: true
    },
    password:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        enum:['Male','Female'],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    grievances:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'grievance'
        }
    ],
    tokens:[{
        token:{
            type:String,
            required: true
        }
    }]
})


const User = mongoose.model('User',userSchema)

export default User;