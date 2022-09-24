import React, { useState, useEffect } from "react";
import axios from "axios";
import Course from "../Components/Course";

const CourseScreen = () => {
  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const userInfoFromStorage = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : {};
    const config = {
        headers: {
          Authorization: `Bearer ${userInfoFromStorage.token}`,
        },
      };

    const { data } = await axios.get(
      "http://localhost:5000/api/courses/",
      config
    );
    // console.log(data);
    setCourses(data);
  },[]);

  return (
    courses.length!==0 ? 
     <div className="page">
            <div className="rw">
                <div className="">
                    <h1 className="small-heading" data-test-label="landing-header">Welcome to freeCodeCamp.org!</h1>
                    <p style={{marginTop:'25px', fontSize:20 }} >"I have not failed. I've just found 10,000 ways that won't work" - Thomas A. Edison</p>
                    {courses.map(course => <Course course={course} />)}
            
                </div> 
            </div>   
            
        </div>        
    :
    <div>No Courses Availiable</div>
  );
};

export default CourseScreen;
