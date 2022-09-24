import mongoose from "mongoose";
import colors from 'colors';
import dotenv from "dotenv";
import courses from "./data/courses.js";
import Course from "./models/courseModel.js";
import connectDb from "./config/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Course.deleteMany();

    const createdCourses = await Course.insertMany(courses);
    console.log(createdCourses);

    await Course.insertMany(createdCourses);

    console.log("data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Course.deleteMany();
    console.log("data destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
