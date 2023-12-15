import mongoose from "mongoose";

const grievanceSchema = new mongoose.Schema({
    ministry:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","Inactive"],
        required:true
    },
    readressal:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true
});

module.exports=mongoose.model('Grievance',grievanceSchema)