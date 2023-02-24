// External module
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaGlobe, FaLock} from "react-icons/fa"

// Internal module
import Style from '@styles/ProjectCard.module.scss'
import Link from 'next/link'

export default function ProjectCard({title, img, description, linkProject, linkCode}) {

  const isPrivate = linkCode === 'private'

  return (
    <div className={Style['project-card']}>

        <Image src={img} alt={`Project ${title}`} />

        <div className={Style.links}>
          <Link href={linkProject} target='_blank'><FaGlobe className={Style.icon}/>See Page</Link>
          <Link
            style={isPrivate ? {cursor: "not-allowed"} : {}}
            onClick={(e) => isPrivate && e.preventDefault()} href={linkCode}
            target='_blank'
          >
              {isPrivate ? <FaLock className={Style.icon}/> : <FaGithub className={Style.icon}/>}Code {isPrivate && 'Priv'}
          </Link>
        </div>

      <div className={Style['card-description']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
