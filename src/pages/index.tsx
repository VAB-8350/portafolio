import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser,
  FaInbox,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTasks,
  FaBriefcase,
  FaGamepad,
  FaGoogle,
  FaFigma,
  FaPlaneArrival
} from "react-icons/fa"

// Internal module
import Style from '@styles/styles.module.scss'

// Images
import profilePic from '@public/images/me.png'
import vicode from '@public/images/icons/vicode.png'
import star from '@public/images/star.png'
import background from '@public/images/background.png'

// Components
import Visual from '@components/Visual'
import ProjectCard from '@components/ProjectCard'
import ContactForm from '@components/ContactForm'
import Tecnologies from '@components/Tecnologies'
import AboutMe from '@components/AboutMe'
import Experience from '@components/Experience'

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

  const projects = [
    // buckedup
    {
      title: 'My current job',
      description: 'In my current job we are developing an Ecommerce, this is for a U.S. company focused on fitness products.',
      linkCode: 'private',
      linkProject: 'https://www.buckedup.com',
      logo: <FaBriefcase />
    },
    // b-large
    {
      title: 'Affiliate page',
      description: `This is a project I did with some friends, in which I was the only programmer, so the entire site is built completely by me in next.js.
      Here I was able to develop the front, back and non-relational database with mongodb.`,
      linkCode: 'private',
      linkProject: 'https://www.b-large.com',
      logo: <FaPlaneArrival />
    },
    // To do
    {
      title: 'Task list',
      description: 'I made this project in a react course in platzi, it has a design more appropriate to mobile.',
      linkCode: 'https://github.com/VAB-8350/task-list',
      linkProject: 'https://task.victorbarilin.com',
      logo: <FaTasks />
    },
    // Grid
    {
      title: 'Figma design',
      description: 'This is a personal project of a blog, at the moment I am working on the design, but I will also take care of the back-end and the front-end.Platzi course specialized in the use of display grid',
      linkCode: undefined,
      linkProject: 'https://www.figma.com/file/7pAu5e0Vu06M8ZoqzLKqcN/Untitled?type=design&node-id=0%3A1&t=HFC8hinkvovhrKLt-1',
      logo: <FaFigma />
    },
    // Rabbit
    {
      title: 'Mini rabbit game',
      description: 'This project was made in a course of animations in platzi',
      linkCode: 'https://github.com/VAB-8350/rabbit-game',
      linkProject: 'https://vab-8350.github.io/rabbit-game/',
      logo: <FaGamepad />
    },
    // Clone
    {
      title: 'Google clone',
      description: 'Platzi course (style practice)',
      linkCode: 'https://github.com/VAB-8350/Platzi---Mi_clon_google',
      linkProject: 'https://vab-8350.github.io/Platzi---Mi_clon_google/',
      logo: <FaGoogle />
    },
  ]

  return (
    <div className={Style.container}>
      <Image loading='lazy' className={Style.background} id='background' src={background} alt='background' />
      <span className={Style['background-filter']} />

      <div className={Style['content-stars']}>
        <Image loading='lazy' className={Style.star} src={star} alt='star' />
        <Image loading='lazy' className={Style.star2} src={star} alt='star' />
        <Image loading='lazy' className={Style.star3} src={star} alt='star' />
      </div>

      <header className={Style.head}>

        <nav>
          <div>
            <span onClick={nextAbout}><FaUser /> About me</span>
            <span onClick={nextContact}><FaInbox /> Contact</span>
          </div>

          <h2><Image loading='lazy' src={vicode} alt="logo personal" />My portfolio</h2>
        </nav>

        <div className={Style.body}>
          <section className={Style.left}>
            <Visual />
          </section>

          <section className={Style.right}>
            <picture>
              <Image loading='lazy' src={profilePic} alt="me" />
              <span className={`${Style['rotate-icon']} ${Style.icon1}`} />
              <span className={`${Style['rotate-icon']} ${Style.icon2}`} />
              <span className={`${Style['rotate-icon']} ${Style.icon3}`} />
            </picture>
          </section>
        </div>
      </header>

      <div className={Style['body-page']}>

        <section className={Style.aboutMe} ref={about} >

          <AboutMe />
          <Tecnologies />

        </section>

        <section className={Style.experience}>
          <h2>Experience</h2>
          <Experience />
        </section>

        <section className={Style.projects}>
          <h2>Projects</h2>

          <div>
            {
              projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  logo={project.logo}
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
          GitHub
        </Link>
        <Link target='_blank' href="https://www.linkedin.com/in/andres-barilin-1b8a0a1b4/">
          <FaLinkedin className={Style.icons} />
          LinkedIn
        </Link>
        <Link target='_blank' href="mailto:victor.barilin2014@gmail.com">
          <FaEnvelope className={Style.icons} />
          Email
        </Link>

        <span><a href="https://github.com/VAB-8350/portafolio">Developed by Victor Andres Barilin <FaGithub/></a></span>
      </footer>
    </div>
  )
}