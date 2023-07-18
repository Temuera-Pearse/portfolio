import React from 'react'

type ProjectBoxProps = {
  imageSrc: string
  description: string
  stacks: string[]
}

function ProjectBox({ imageSrc, description, stacks }: ProjectBoxProps) {
  return (
    <div className="max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={imageSrc} alt="Project" />
      <div className="p-4">
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex mt-4">
          {stacks.map((stack: string, index: number) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm rounded-full px-2 py-1 mr-2"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectBox
