import React from 'react'
import Task5 from './Task5'
function Task5data() {
    const App = () => {
        const course = {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            }
          ]
        }
      
        return (
          <div>
            <Task5 key={course.id} course={course} />
          </div>
        )
      }
  return (
    <div><App/></div>
  )
}

export default Task5data