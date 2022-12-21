import React, { useRef } from 'react'
import Image from 'next/image'
import { FaUser, FaInbox, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

// Internal module
import Style from '@styles/styles.module.scss'
import profilePic from 'public/images/me.png'
import project1 from 'public/images/project1.png'
import project2 from 'public/images/project2.png'
import project3 from 'public/images/project3.png'
import css from 'public/images/css.png'
import html from 'public/images/html.png'
import javascript from 'public/images/javascript.png'
import react from 'public/images/react.png'
import typescript from 'public/images/typescript.png'

// Components
import Visual from '@components/Visual'
import ProjectCard from '@components/ProjectCard'
import ContactForm from '@components/ContactForm'
import Link from 'next/link'

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
  
  // Ref
  const about = useRef(null)
  const contact = useRef(null)

  const nextAbout = () => {
    about.current?.scrollIntoView({block: 'center', behavior: 'smooth'})
  }

  const nextContact = () => {
    contact.current?.scrollIntoView({block: 'center', behavior: 'smooth'})
  }

  return (
    <div>
      <span className={Style.background} />
      <header className={Style.head}>

        <nav>
          <div>
            <span onClick={nextAbout}><FaUser /> About me</span>
            <span onClick={nextContact}><FaInbox /> Contact</span>
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

        <section className={Style.aboutMe} ref={about} >
          <div className={Style.tecnologies}>
            <h2>Tecnologies</h2>
            <div>
              <span>
                <Image src={javascript} alt="logo javascript" />
                <span>JavaScript</span>
              </span>
              <span>
                <Image src={react} alt="logo react" />
                <span>React</span>
              </span>
              <span>
                <Image src={typescript} alt="logo typescript" />
                <span>TypeScript</span>
              </span>
              <span>
                <Image src={css} alt="logo css" />
                <span>CSS</span>
              </span>
              <span>
                <Image src={html} alt="logo html" />
                <span>HTML</span>
              </span>
            </div>
          </div>

          <div className={Style['about-me']}>
            <h2>About me</h2>
            <p>
              I am a technology enthusiast, thirsty for learning, and very responsible. I want to grow in this field and overcome the challenges that I encounter.
            </p>
          </div>
        </section>

        <section className={Style.projects}>
          <h2>Projects</h2>

          <div>
            {
              projects.map((project, index) => (
                <ProjectCard
                  key={index}
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

        <section className={Style.contact}ref={contact}>
            <h2>
              Contact me
            </h2>

            <ContactForm />
        </section>
      </div>

      <footer className={Style.footer}>
        <Link target='_blank' href="https://github.com/VAB-8350">
          <FaGithub className={Style.icons} />
        </Link>
        <Link target='_blank' href="https://www.linkedin.com/in/andres-barilin-1b8a0a1b4/">
          <FaLinkedin className={Style.icons} />
        </Link>
        <Link target='_blank' href="mailto:victor.barilin2014@gmail.com">
          <FaEnvelope className={Style.icons} />
        </Link>
      </footer>
    </div>
  )
}
