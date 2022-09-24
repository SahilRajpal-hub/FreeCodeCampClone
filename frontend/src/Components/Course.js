import React from 'react'

const Course = ({course}) => {
  return (
    <div style={{border:'2px solid black', backgroundColor:'rgb(182 181 188)'}}>
        <h3 key={course._id} >{course.title}</h3>
    </div>
  )
}

export default Course