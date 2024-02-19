import React from 'react'

function Task5({course}) {
    const Part = ({name,exercises}) => {
        return(
            <div>
                <p>{name} : {exercises} exercises</p>
            </div>
        )
    }
    const totalexercises = course.parts.reduce((sum,part) => sum + part.exercises,0)
  return (
    <div>
        <h1>{course.name}</h1>
        {course.parts.map(courses => <Part key={courses.id} name={courses.name} exercises={courses.exercises}/>)}
        <h2>Total exercises : {totalexercises} </h2>
    </div>
  )
}

export default Task5