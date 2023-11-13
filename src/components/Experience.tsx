// External module
import React, { useEffect, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
// Internal module
import Style from '@styles/Experience.module.scss'

export default function Experience() {

  const [showJob, setShowJob] = useState('Arbot')
  const [description, setDescription] = useState('description')

  useEffect(() => {
    const element = document.getElementById("about-me")
    VanillaTilt.init(element, {
      max: 7,
		  speed: 400,
    })
  }, [])

  return (
    <div className={Style.experience}>

      <section className={Style['work-list']}>

        <h3>Jobs</h3>
        <ul>
          <li 
            className={showJob === 'Arbot' ? Style.active : ''}
            onClick={() => setShowJob('Arbot')}
          >
            Arbot <span>2019 - 2021</span>
          </li>
          <li 
            className={showJob === 'Devias' ? Style.active : ''}
            onClick={() => setShowJob('Devias')}
          >
            Devias <span>2022 - Current</span>
          </li>
        </ul>
      </section>

      <section className={Style.content}>
        <div className={Style['btn-container']}>
          <button
            onClick={() => setDescription('description')}
            className={description === 'description' ? Style.active : ''}
          >Description</button>
          <button
            onClick={() => setDescription('achievements')}
            className={description === 'achievements' ? Style.active : ''}
          >Achievements</button>
        </div>

        <div className={Style['text-content']}>
          <div className={showJob !== 'Arbot' ? Style.hidden : ''}>

            <p className={description !== 'description' ? Style.hidden : ''}>
            In this position he carried out work more related to robotics, carrying out tasks such as assembly and designs of electronic boards, 3D design and software development.
            <br /><br />
            In this job I did not have the opportunity to use many web technologies, but he gave me the opportunity to solve various challenges logically.
            <br /><br />
            You can find some achievements in the "Achievements" section
            </p>

            <ul className={description !== 'achievements' ? Style.hidden : ''}>
              <li>
                Control for machinery: This was my first challenge in this company, I had to develop a remote control and its receiver. This had to be able to control the hydraulic system of a truck from a distance to be able to observe it from different angles and thus be more precise. In this project make the 3D design of the control, the design of the boards, and part of the code
              </li>

              <li>
                Bag silo guardian: On that occasion, we developed a device that was placed inside a bag silo and if it was cut the device would detect it and send out a signal that could be seen on a dashboard by the police and the owner of the field
              </li>
            </ul>

          </div>

          <div className={showJob !== 'Devias' ? Style.hidden : ''}>
            <p className={description !== 'description' ? Style.hidden : ''}>
              This was my first job oriented to web software development, where I was able to gain a lot of experience supported by a good team.
              <br /><br />
              Not only did I do web development, but I also had the pleasure of being able to contribute to the development of a phone app, using React Native.
              <br /><br />
              You can find some achievements in the "Achievements" section
            </p>

            <ul className={description !== 'achievements' ? Style.hidden : ''}>
              <li>
                E-commerce: The project in which I had the most participation was an American E-commerce dedicated to the sale of fitness products <a href="https://www.buckedup.com" target='_blank'>"buckedup.com"</a>. 
                <br />
                I was even in charge of the entire project including communication with the client during the holiday season (within 15 days) overcoming many challenges and strengthening my confidence more.
              </li>

              <li>
                Mobile App: For a while, I was divided between the development of E-commerce and this App.
                <br />
                This App was oriented to the management of clients of social work, my participation was mainly the implementation of views.
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}
