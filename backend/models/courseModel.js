import mongoose from 'mongoose'

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  },
  {
    timeStamps: true,
  }
)



const Course = mongoose.model('Course', courseSchema)

export default Course