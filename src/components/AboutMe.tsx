// External module
import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
// Internal module
import Style from '@styles/AboutMe.module.scss'

export default function ProjectCard() {

  useEffect(() => {
    const element = document.getElementById("about-me")
    VanillaTilt.init(element, {
      max: 7,
		  speed: 400,
    })
  }, [])

  return (
    <div className={Style['about-me']} id='about-me'>
      <h2>About me</h2>

      <p>
        After coming across the gigantic and exciting world of software development, I decided to focus on web development, thirsty to learn and improve my work to offer more robust and reliable solutions.
        <br/><br/>

        I like being able to contribute ideas to the team and learn from their experiences,
        to achieve the best possible result by committing ourselves to the project and the client.
        <br/><br/>

        I am currently working at Devias as a Front-end developer, for about one year ago. I add my experience in ArboT, (a robotics company). Over there,
        I used logical thinking focused on solving both hardware and software problems.
        That made my entry into web development much easier.
      </p>
    </div>
  )
}
