import React from 'react'
import ProjectBox from './ProjectBox'

function ProjectBoxContent() {
  return (
    <div className="w-500 h-500 flex flex-wrap justify-center">
      <div className="w-1/3 p-2">
        <ProjectBox
          imageSrc="/Projects/loveCalculator.png"
          description="Our Team decided we wanted to know the compatibility of peoples relationships. so we made a love calculator. Its generates a random number from 1-100 and then depending on what number it generates thats the percentage you and your crush have of making a solid relationship. very fun and also heartbreaking at times."
          stacks={['React', 'Forms']}
        />
      </div>
      <div className="w-1/3 p-2">
        <ProjectBox
          imageSrc="/Projects/neighbours.png"
          description="We had a vision to make a local social app focusing purely on people who live in the same neighbourhood. You can sign in using auth0 then we had the vision to use a gps API to group people together and you could see what would be going on in your local neighborhood. We also had a Weather API in here that was tied to your location as well. This app we found to be very beefy with lots of CRUD everywhere. its still a work in progress "
          stacks={['React', 'React-query', 'Sqlit3', 'Tailwind']}
        />
      </div>
      <div className="w-1/3 p-2">
        <ProjectBox
          imageSrc="/Projects/quizz.png"
          description="Here my Team wanted to make a true or false quiz game. Lots of fun making this game. We decided to try and make it look like a retro arcard game and we added 16-bit sounds to make it more intense and fun. I learned alot about style here."
          stacks={['react', 'React-Redux', 'Superagent', 'knex', 'express']}
        />
      </div>
    </div>
  )
}
export default ProjectBoxContent
