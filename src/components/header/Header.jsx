import React from 'react';
import CTA from './CTA';
import Socials from './Socials';
import ME from '../../assests/Firefly_3d_image_of_a_cute_light_complexion_professional_girl_saying_hi_with_greenishblue_dark_backg-removebg-preview.png'
import './header.css'

const Header = () => {
  con
  return (
    <header>
      <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Vaishnavi Ladda</h1>
          <h5 className="text-light">UI/UX Designer and Web Developer</h5>
          <CTA/>
          <div className='me'>
            <img src={ME} alt='my photo'></img>
          </div>
          <Socials/>
          <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header