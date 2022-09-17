import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/marc-stlouis/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Marcus0224" target='_blank' rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default Socials