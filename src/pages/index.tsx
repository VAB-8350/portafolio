import React from 'react'
import Image from 'next/image'

// Internal module
import Style from '@styles/styles.module.scss'
import profilePic from 'public/images/me.png'

// Components
import Visual from '@components/Visual'
import { ST } from 'next/dist/shared/lib/utils'

export default function Home() {

  return (
    <div>
      <header className={Style.head}>

        <nav>
          <div>
            <span>About me</span>
            <span>Skills</span>
          </div>

          <h2>Mi portafolio</h2>
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
        <section>
          <div className={Style.tecnlogies}>
            <h2>Tecnologies</h2>
          </div>

          <div className={Style['about-me']}>
            <h2>About me</h2>
            <p>
              I am a technology enthusiast, thirsty for learning, and very responsible. I want to grow in this field and overcome the challenges that I encounter.
            </p>
          </div>
        </section>

        <section className={Style['other-projects']}>
          <h2>Other Projects</h2>
        </section>

      </div>
    </div>
  )
}
