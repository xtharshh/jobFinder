import express from "express";
import {deleteJob, getAllJobs,getmyjobs,postJob,updateJob,getSingleJob} from "../controllers/jobController.js";
import {isAuthenticated} from "../middlewares/auth.js"
const router=express.Router();

router.get("/getall",getAllJobs);
router.post("/postjob",isAuthenticated,postJob);
router.get("/getmyjobs",isAuthenticated,getmyjobs);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id",isAuthenticated,deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);
export default router;