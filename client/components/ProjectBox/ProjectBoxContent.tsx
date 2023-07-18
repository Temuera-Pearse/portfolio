import React from 'react'
import ProjectBox from './ProjectBox'

function ProjectBoxContent() {
  return (
    <div className="w-500 h-500 flex flex-wrap justify-center">
      <div className="w-1/3 p-2">
        <ProjectBox
          imageSrc="public/Projects/loveCalculator.png"
          description="Our Team decided we wanted to know the compatibility of"
          stacks={['React']}
        />
      </div>
      <div className="w-1/3 p-2">
        <ProjectBox
          imageSrc="public/Projects/neighbours.png"
          description="Our Team decided we wanted to know the compatibility of"
          stacks={['React']}
        />
      </div>
      <div className="w-1/3 p-2">
        <ProjectBox
          imageSrc="public/Projects/todo1.png"
          description="Our Team decided we wanted to know the compatibility of"
          stacks={['React']}
        />
      </div>
    </div>
  )
}
export default ProjectBoxContent
