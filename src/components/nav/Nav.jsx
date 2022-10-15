import React from 'react';
import './nav.css';
import { useState } from 'react';
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {TiFolderOpen} from 'react-icons/ti'
import {TbMessageCircle} from 'react-icons/tb'
import {GiFootprint} from 'react-icons/gi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><TiFolderOpen/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircle/></a>
      <a href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><GiFootprint/></a>
    </nav>
  )
}

export default Nav