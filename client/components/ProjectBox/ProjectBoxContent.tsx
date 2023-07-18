import React from 'react'
import ProjectBox from './ProjectBox'

function ProjectBoxContent() {
  return (
    <div>
      <div>
        <ProjectBox
          imageSrc="public/Projects/loveCalculator.png"
          description="Our Team decided we wanted to know the the compatibility of "
          stacks={['React']}
        />
      </div>
      <div>
        <ProjectBox
          imageSrc="public/Projects/neighbours.png"
          description="Our Team decided we wanted to know the the compatibility of "
          stacks={['React']}
        />
      </div>
      <div>
        <ProjectBox
          imageSrc="public/Projects/Todo.png"
          description="Our Team decided we wanted to know the the compatibility of "
          stacks={['React']}
        />
      </div>
    </div>
  )
}
export default ProjectBoxContent
