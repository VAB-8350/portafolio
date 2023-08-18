// External module
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import css from '@public/images/icons/css.png'
import html from '@public/images/icons/html.png'
import javascript from '@public/images/icons/javascript.png'
import react from '@public/images/icons/react.png'
import typescript from '@public/images/icons/typescript.png'
import next from '@public/images/icons/next.png'
import sass from '@public/images/icons/sass.png'
import nodejs from '@public/images/icons/nodejs.png'
import less from '@public/images/icons/less.png'
import arduino from '@public/images/icons/arduino.png'
import micropython from '@public/images/icons/micropython.png'
import solidworks from '@public/images/icons/solidworks.png'
import fusion from '@public/images/icons/fusion.png'
import eagle from '@public/images/icons/eagle.png'
import git from '@public/images/icons/git.png'
import github from '@public/images/icons/github.png'
import linux from '@public/images/icons/linux.png'
import figma from '@public/images/icons/figma.png'
import docker from '@public/images/icons/docker.png'
import blender from '@public/images/icons/blender.png'

// Internal module
import Style from '@styles/Tecnologies.module.scss'


export default function ProjectCard() {

  interface WebTechnology {
    img: StaticImageData;
    name: string;
  }
  
  interface Technologies {
    work: WebTechnology[];
    lern?: WebTechnology[];
  }

  interface Stack {
    webTecnologies: Technologies
    robotTecnologies: Technologies
    complementary: Technologies
  }

  const [tecnologies, setTecnologies] = useState<Stack>(null)
  const [showTecnologie, setShowTecnologie] = useState('webTecnologies')
  
  useEffect(() => {

    const webTecnologies: Technologies = {
      work: [
        {
          img: react,
          name: 'React'
        },
        {
          img: javascript,
          name: 'JavaSrcipt'
        },
        {
          img: nodejs,
          name: 'NodeJS'
        },
        {
          img: css,
          name: 'CSS'
        },
        {
          img: sass,
          name: 'SASS'
        },
        {
          img: less,
          name: 'LESS'
        },
        {
          img: html,
          name: 'HTML'
        },
      ],
      lern: [
        {
          img: next,
          name: 'NextJS'
        },
        {
          img: typescript,
          name: 'TypeScript'
        },
        {
          img: figma,
          name: 'Figma'
        }
      ]
    }

    const robotTecnologies: Technologies = {
      work: [
        {
          img: arduino,
          name: 'Arduino'
        },
        // {
        //   img: micropython,
        //   name: 'MicroPython'
        // },
        // {
        //   img: solidworks,
        //   name: 'SolidWorks'
        // },
        {
          img: fusion,
          name: 'Fusion 360'
        },
        {
          img: blender,
          name: 'Blender'
        },
        // {
        //   img: eagle,
        //   name: 'Eagle'
        // },
      ],
      lern: []
    }

    const complementary: Technologies = {
      work: [
        {
          img: git,
          name: 'Git'
        },
        {
          img: github,
          name: 'GitHub'
        },
        {
          img: linux,
          name: 'Linux'
        }
      ],
      lern: [
        {
          img: docker,
          name: 'Docker'
        }
      ]
    }

    setTecnologies({webTecnologies, robotTecnologies, complementary})
    
  }, [])

  return (
    <div className={Style.tecnologies}>
      <section className={Style.tabs}>

        <span 
          className={showTecnologie === 'webTecnologies' ? Style.active : ''}
          onClick={() => setShowTecnologie('webTecnologies')}
        >
          FRONT
        </span>

        <span 
          className={showTecnologie === 'complementary' ? Style.active : ''}
          onClick={() => setShowTecnologie('complementary')}
        >
          INFRA
        </span>

        <span 
          className={showTecnologie === 'robotTecnologies' ? Style.active : ''} 
          onClick={() => setShowTecnologie('robotTecnologies')}
        >
          ROBOT
        </span>        
        
      </section>
  
      <h2>Technologies</h2>
      <div className={showTecnologie !== 'webTecnologies' ? Style.hidden: ''}>
        {
          tecnologies?.webTecnologies?.work.map(technology => 
            <span>
              <Image loading='lazy' src={technology.img} alt={technology.name} />
              <span>{technology.name}</span>
            </span>
          )
        }
      </div>

      <div className={showTecnologie !== 'robotTecnologies' ? Style.hidden: ''}>
        {
          tecnologies?.robotTecnologies?.work.map(technology => 
            <span>
              <Image loading='lazy' src={technology.img} alt={technology.name} />
              <span>{technology.name}</span>
            </span>
          )
        }
      </div>

      <div className={showTecnologie !== 'complementary' ? Style.hidden: ''}>
        {
          tecnologies?.complementary?.work.map(technology => 
            <span>
              <Image loading='lazy' src={technology.img} alt={technology.name} />
              <span>{technology.name}</span>
            </span>
          )
        }
      </div>

      
      {
        tecnologies && tecnologies[showTecnologie]?.lern.length > 0 &&
        <h3>I am learning</h3>
      }

      {
        tecnologies && tecnologies?.webTecnologies?.lern.length > 0 &&
        <div className={showTecnologie !== 'webTecnologies' ? Style.hidden: ''}>
          {
            tecnologies?.webTecnologies?.lern.map(technology => 
              <span>
                <Image loading='lazy' src={technology.img} alt={technology.name} />
                <span>{technology.name}</span>
              </span>
            )
          }
        </div>
      }

      {
        tecnologies && tecnologies?.robotTecnologies?.lern.length > 0 &&
        <div className={showTecnologie !== 'robotTecnologies' ? Style.hidden: ''}>
          {
            tecnologies?.robotTecnologies?.lern.map(technology => 
              <span>
                <Image loading='lazy' src={technology.img} alt={technology.name} />
                <span>{technology.name}</span>
              </span>
            )
          }
        </div>
      }

      {
        tecnologies && tecnologies?.complementary?.lern.length > 0 &&
        <div className={showTecnologie !== 'complementary' ? Style.hidden: ''}>
          {
            tecnologies?.complementary?.lern.map(technology => 
              <span>
                <Image loading='lazy' src={technology.img} alt={technology.name} />
                <span>{technology.name}</span>
              </span>
            )
          }
        </div>
      }
    </div>
  )
}
