// External module
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaGlobe, FaLock} from "react-icons/fa"

// Internal module
import Style from '@styles/ProjectCard.module.scss'
import Link from 'next/link'

export default function ProjectCard({title, img, description, linkProject, linkCode}) {

  const isPrivate = linkCode === 'privado'

  return (
    <div className={Style['project-card']}>

      <div className={Style['head-card']}>
        <Image src={img} alt={`Project ${title}`} />
        <div>
          <Link href={linkProject} target='_blank'><FaGlobe/>See Page</Link>
          <Link
            style={isPrivate ? {cursor: "not-allowed"} : {}}
            onClick={(e) => isPrivate && e.preventDefault()} href={linkCode}
            target='_blank'
          >
              {isPrivate ? <FaLock/> : <FaGithub />}Code {isPrivate && 'Priv'}
          </Link>
        </div>
      </div>

      <div className={Style['card-description']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
