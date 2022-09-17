import React from "react";
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>
      

      <ul className='permalinks'>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/marc-stlouis/" ><AiFillLinkedin/></a>
        <a href="https://github.com/Marcus0224" ><AiFillGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Marc St louis. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer