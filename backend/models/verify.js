import mongoose from "mongoose";

const verifyUserSchema = mongoose.Schema({
    mobilenumber:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        minlength:4,
        maxlength:4,
        required:true,
    }
})

const verifyuser = mongoose.model('verifyuser',verifyUserSchema);

export default verifyuser;