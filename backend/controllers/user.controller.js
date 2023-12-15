import User from "../models/user.js"
import verifyuser  from "../models/verify.js"
import * as dotenv from "dotenv";
import twilio from "twilio";
import bcrypt from 'bcrypt';
import { UserDefinedMessageInstance } from "twilio/lib/rest/api/v2010/account/call/userDefinedMessage.js";



dotenv.config();

const sendotp = async(req,res) => {
    try{
        const {mobilenumber} = req.body;
        var otp = Math.floor(1000 + Math.random() * 9000);
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
        client.messages
        .create({
            body: `Hello from nivaran ${otp}`,
            from:'+12057935484',
            to:mobilenumber
        })
        const newverifyuser = await verifyuser.create({
            mobilenumber,
            otp
        })
        res.status(200).json(newverifyuser)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const verifyotp  = async(req,res) => {
    try{
        const {mobilenumber,otp} = req.body;
        const findUser = await verifyuser.findOne({mobilenumber,otp});
        if(findUser)
        {
            res.status(200).json(findUser)
        }
        else{
            res.status(404).jsoon({message:"Incorrect otp"})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const createUser = async(req,res) => {
    try{
        const {name,aadharnumber,password,mobilenumber,gender,address} = req.body;
        const userExists = await User.findOne({mobilenumber});
        if(userExists)
        {
            return res.status(200).json({message:'User already exists'});
        }
        else{
            const hpass = await bcrypt.hash(password,10);
            const newUser = new User({
                name,
                aadharnumber,
                password:hpass,
                mobilenumber,
                gender,
                address
            });
            await newUser.save();
            res.status(200).send({newUser});
        }
        }catch(error){
        res.status(500).json({message:error.message});
    }
}

const loginUser = async(req,res) => {
    try{
        const {mobilenumber,password} = req.body;
        const ispresent= await User.findOne({mobilenumber});
        if(!ispresent)
        {
            res.status(404).json({message:'Incorrect password or mobile number'})
        }
        else{
            const result = await bcrypt.compare(password,ispresent.password)
            if(result)
            {
                res.status(200).send({ispresent});
            }
            else
            res.status(404).json({message:'Check Your Password'})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const logoutUser = async(req,res) => {
    try{
        res.status(200).send('Logged out')
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

const getAllUsers = async(req,res) => {
    try{
        const all  = await User.find()
        return res.status(200).json({all})
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

const getUserById = async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user)
        res.status(404).json({message:'User not found'})
        else
        res.status(200).json({user})
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
}




export { createUser,sendotp,verifyotp,loginUser,logoutUser,getAllUsers,getUserById}