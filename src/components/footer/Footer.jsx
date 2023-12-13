import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>VAISHNAVI LADDA</a>
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='socials'>
        <a href="https://www.linkedin.com/in/vaishnavi-ladda-3bb198234/"><BsLinkedin/></a>
        <a href="https://github.com/vaishnavi2833"><FaGithub/></a>
        <a href="https://leetcode.com/laddavaishnavi/"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer