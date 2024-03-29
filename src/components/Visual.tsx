// External modules
import React, { useEffect, useState, useRef} from 'react'
import VanillaTilt from 'vanilla-tilt'
import Link from 'next/link'

// Internal modules
import Style from '@styles/visual.module.scss'

export default function Visual() {

  // Ref
  const code = useRef(null)

  // Local state
  const [age, setAge] = useState(0)

  // Effect
  useEffect(() => {
    var today = new Date()
    var birth = new Date(1999, 4, 29);
    var edad = today.getTime() - birth.getTime();
    edad = Math.floor(edad / 31536000000)

    const element = document.getElementById("visual-card")
    VanillaTilt.init(element, {
      max: 7,
		  speed: 400,
    })

    setAge(edad)
  }, [])

  useEffect(() => {
    cleanAnimations()
  }, [code])

  // Methods
  const cleanAnimations = () => {
    const typing1 = document.getElementById('typing1')
    const typing2 = document.getElementById('typing2')
    const typing3 = document.getElementById('typing3')
    const typing4 = document.getElementById('typing4')
    const typing5 = document.getElementById('typing5')

    setTimeout(() => {
      typing1.className = ''
    }, 1000)

    setTimeout(() => {
      typing2.className = ''
    }, 3000)

    setTimeout(() => {
      typing3.className = ''
    }, 5000)

    setTimeout(() => {
      typing4.className = ''
    }, 6000)

    setTimeout(() => {
      typing5.className = Style.typing5
    }, 7000)
  }
 

  return (
    <div className={Style.visual} id='visual-card'>
      <section className={Style.visualTop}>
        <span />
        <span />
        <span />
        <span />
      </section>

      <div className={Style.body}>
        <section className={Style.fileBar}>
          <span />
          <span />
          <span />
          <span />
        </section>

        <section className={Style.visualContent}>
          <p ref={code}>
            <span className={code.current ? `${Style.typing1} ${Style.typing}` : Style.noShow} id='typing1'>
              const me <span className={Style.var}> = {'{'}</span> <br/>
            </span>

            <span className={code.current ? `${Style.typing2} ${Style.typing}` : Style.noShow} id='typing2'>
              <span className={`${Style.var} ${Style.line}`}>name: '</span><span className={Style.string}>Andres Barilin</span><span className={Style.var}>',</span> <br/>
            </span>

            <span className={code.current ? `${Style.typing3} ${Style.typing}` : Style.noShow} id='typing3'>
              <span className={`${Style.var} ${Style.line}`}>main: '</span><span className={Style.string}>Front-end Developer</span><span className={Style.var}>',</span> <br/>
            </span>

            <span className={code.current ? `${Style.typing4} ${Style.typing}` : Style.noShow} id='typing4'>
              <span className={`${Style.var} ${Style.line}`}>years:</span> <span className={Style.num}>{age}</span><br/>
            </span>
            <span className={code.current ? `${Style.typing5} ${Style.typing}` : Style.noShow} id='typing5'>
              <span className={Style.var}>{'}'};</span>
            </span>

          </p>

          <div>
            <Link href="/pdf/CV-Andres_Barilin.pdf" target='_blank' download='CV-Andres_Barilin.pdf'>Download CV</Link>

            <Link
              href='https://www.canva.com/design/DAFlvrITxu4/t6VpzTYhomtP0s4f8IWotA/view?utm_content=DAFlvrITxu4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
              target='_blanck'
            >
              View CV
            </Link>
          </div>

        </section>
      </div>

    </div>
  )
}
