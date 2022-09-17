import React from 'react'
import CV from '../../assets/resume/Resume1.png'

const Resume = () => {
  return (
    <div>
        <div className="resume">
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
    </div>
  )
}

export default Resume