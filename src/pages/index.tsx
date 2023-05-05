import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser,
  FaInbox,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCameraRetro,
  FaTasks,
  FaBriefcase,
  FaGamepad,
  FaGoogle,
  FaFigma
} from "react-icons/fa"
import axios from 'axios'

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
    // To do
    {
      title: 'Task list',
      description: 'I made this project in a react course in platzi, it has a design more appropriate to mobile.',
      linkCode: 'https://github.com/VAB-8350/task-list',
      linkProject: 'https://task.victorbarilin.com',
      logo: <FaTasks />
    },
    // Movies
    {
      title: 'Movies App',
      description: 'Course of platzi api rest consumption (done only with HTML CSS and vanilla JavaScript)',
      linkCode: 'https://github.com/VAB-8350/curso-practico-api-rest---Platzi',
      linkProject: 'https://vab-8350.github.io/curso-practico-api-rest---Platzi/',
      logo: <FaCameraRetro />
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
      <Image className={Style.background} id='background' src={background} alt='background' />
      <span className={Style['background-filter']} />

      <div className={Style['content-stars']}>
        <Image className={Style.star} src={star} alt='star' />
        <Image className={Style.star2} src={star} alt='star' />
        <Image className={Style.star3} src={star} alt='star' />
      </div>
      
      <header className={Style.head}>

        <nav>
          <div>
            <span onClick={nextAbout}><FaUser /> About me</span>
            <span onClick={nextContact}><FaInbox /> Contact</span>
          </div>

          <h2><Image src={vicode} alt="logo personal" />My portfolio</h2>
        </nav>
        
        <div className={Style.body}>
          <section className={Style.left}>
            <Visual />
          </section>

          <section className={Style.right}>
            <picture>
              <Image src={profilePic} alt="me" />
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
        </Link>
        <Link target='_blank' href="https://www.linkedin.com/in/andres-barilin-1b8a0a1b4/">
          <FaLinkedin className={Style.icons} />
        </Link>
        <Link target='_blank' href="mailto:victor.barilin2014@gmail.com">
          <FaEnvelope className={Style.icons} />
        </Link>

        <span><a href="https://github.com/VAB-8350/portafolio">Developed by Victor Andres Barilin <FaGithub/></a></span>
      </footer>
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const userAgent = context.req.headers['user-agent']

  const ip = context.req.headers['x-real-ip'] || context.req.socket.remoteAddress
  
  // Aquí envías la petición a la API de Telegram
  try {
    const message = `Nuevo usuario en la página! IP: ${ip}, Navegador: ${userAgent}`

    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/sendMessage`

    await axios.post(telegramApiUrl, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    })

  } catch (error) {
  }

  return { props: {} }
}