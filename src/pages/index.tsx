import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUser, FaInbox, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

// Internal module
import Style from '@styles/styles.module.scss'
import projects from 'data/projects'

// Images
import profilePic from '@public/images/me.png'
import vicode from '@public/images/icons/vicode.png'

// Components
import Visual from '@components/Visual'
import ProjectCard from '@components/ProjectCard'
import ContactForm from '@components/ContactForm'
import Tecnologies from '@components/Tecnologies'
import AboutMe from '@components/AboutMe'

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

          <h2><Image src={vicode} alt="logo personal" />My portfolio</h2>
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

          <AboutMe />
          <Tecnologies />
          
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
