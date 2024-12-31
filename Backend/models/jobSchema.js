import mongoose, { mongo }  from "mongoose";
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide job title"],
        minLength:[3,"job title must contain at least 3 characters"],
        maxLength:[50,"job title must not exceed 50 characters"],
    },
    description:{
        type:String,
        required:[true,"Please provide job description"],
        minLength:[3,"job description must contain at least 3 characters"],
        maxLength:[350,"job description must not exceed 350 characters"],
    },
    category:{
        type:String,
        required:[true,"Job Category is required"],
    },
    country:{
        type:String,
        required:[true,"Job Country is required"],
    },
    city:{
        type:String,
        required:[true,"Job city is required"],
    },
    location:{
        type:String,
        required:[true,"Please provide exact location"],
        minLength:[5,"Job location must contain atleast 5 characters"],
    },
    fixedSalary:{
        type:Number,
        minLength:[4,"Fixed Salary must contain atleast 4 digits"],
        maxLength:[9,"Fixed Salary should not exceed 9 digits"],
    },
    salaryFrom:{
        type:Number,
        minLength:[4," Salary from must contain atleast 4 digits"],
        maxLength:[9," Salary from  should not exceed 9 digits"],
    },
    salaryTo:{
        type:Number,
        minLength:[4," Salary  to must contain atleast 4 digits"],
        maxLength:[9," Salary to  should not exceed 9 digits"],
    },
    expired:{
       type:Boolean,
       default:false, 
    },
    jobPostedOn:{
        type:Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
}); 
export const Job=mongoose.model("Job",jobSchema);