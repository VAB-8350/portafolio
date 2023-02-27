// External module
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa"

// Internal module
import Style from '@styles/ProjectCard.module.scss'
import Link from 'next/link'

export default function ProjectCard({title, logo, description, linkProject, linkCode}) {

  const isPrivate = linkCode === 'private'

  return (
    <div className={Style['project-card']}>

        <h3>{logo}</h3>

        <div className={Style.links}>
          <Link href={linkProject}  target='_blank'><FaExternalLinkAlt className={Style.icon}/></Link>
          <Link
            style={isPrivate ? {cursor: "not-allowed"} : {}}
            onClick={(e) => isPrivate && e.preventDefault()} href={linkCode}
            target='_blank'
          >
              {isPrivate ? <FaLock className={Style.icon}/> : <FaGithub className={Style.icon}/>} {isPrivate && 'Priv'}
          </Link>
        </div>

      <div className={Style['card-description']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
