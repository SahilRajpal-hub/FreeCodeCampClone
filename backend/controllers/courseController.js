import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generateTokens.js";
import Course from "../models/courseModel.js";

// @desc    get all courses
// @route    Get /api/courses
// @access    Private
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.status(200).send(courses);
});

export { getCourses };
