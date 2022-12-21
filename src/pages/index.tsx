import React from 'react'
import Image from 'next/image'
import { FaUser, FaInbox } from "react-icons/fa"

// Internal module
import Style from '@styles/styles.module.scss'
import profilePic from 'public/images/me.png'
import project1 from 'public/images/project1.png'
import project2 from 'public/images/project2.png'
import project3 from 'public/images/project3.png'

// Components
import Visual from '@components/Visual'
import ProjectCard from '@components/ProjectCard'

const projects = [
  {
    title: 'Mi trabajo actual',
    description: 'En mi trabajo actual estamos en el desarrollo de un Ecommerce, este es para una empresa de EE.UU. enfocada en los productos fitnes',
    linkCode: 'https://github.com/VAB-8350/rabbit-game',
    linkProject: 'https://vab-8350.github.io/rabbit-game/',
    img: project1
  },
  {
    title: 'App de peliculas',
    description: 'Curso de platzi consumo de api rest (realizado solo con HTML CSS Y JavaScript)',
    linkCode: 'https://github.com/VAB-8350/rabbit-game',
    linkProject: 'https://vab-8350.github.io/rabbit-game/',
    img: project2
  },
  {
    title: 'Mini juego de conejos',
    description: 'Este proyecto lo realice en un curso de animaciones en platzi',
    linkCode: 'https://github.com/VAB-8350/rabbit-game',
    linkProject: 'https://vab-8350.github.io/rabbit-game/',
    img: project3
  }
]

export default function Home() {

  return (
    <div>
      <span className={Style.background} />
      <header className={Style.head}>

        <nav>
          <div>
            <span><FaUser /> About me</span>
            <span><FaInbox /> Contact</span>
          </div>

          <h2>Mi Portafolio</h2>
        </nav>
        
        <div className={Style.body}>
          <section className={Style.left}>
            <Visual />
          </section>

          <section className={Style.right}>
            <picture>
              <Image src={profilePic} alt="me" />
            </picture>
          </section>
        </div>
      </header>

      <div className={Style['body-page']}>
        <section className={Style.aboutMe}>
          <div className={Style.tecnlogies}>
            <h2>Tecnologies</h2>
            <div>
            </div>
          </div>

          <div className={Style['about-me']}>
            <h2>About me</h2>
            <p>
              I am a technology enthusiast, thirsty for learning, and very responsible. I want to grow in this field and overcome the challenges that I encounter.
            </p>
          </div>
        </section>

        <section className={Style['other-projects']}>
          <h2>Projects</h2>

          <div>
            {
              projects.map(project => (
                <ProjectCard
                  img={project.img}
                  linkCode={project.linkCode}
                  linkProject={project.linkProject}
                  title={project.title}
                  description={project.description}
                />
              ))
            }
          </div>
        </section>

      </div>
    </div>
  )
}
