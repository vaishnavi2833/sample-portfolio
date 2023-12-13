import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/vaishnavi-ladda-3bb198234/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/vaishnavi2833' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default Socials