import React from "react";
import coverImage from '../../assets/cover/Turk.jpeg';
import './about.css';
import {BsAward} from 'react-icons/bs'
import { FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={coverImage} alt='About me' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>
                Expreience
              </h5>
              <small>Junior Fullstack Developer</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>
                Collaborations
              </h5>
              <small>TBD</small>
            </article>
            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>
                Projects
              </h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
          Im a FullStack developer looking for an opportunity to connect and
            showcase my abilities. I have less than a year experience in coding
            but willing to learn and grow within the right organzation. Im a
            proven problem solver with great communication skills to help any
            organzation succeed.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  );
}

export default About;
