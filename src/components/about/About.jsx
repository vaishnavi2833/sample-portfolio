import React from 'react'
import './about.css'
import ME from '../../assests/Firefly_3d_image_of_a_cute_light_complexion_professional_girl_with_a_computer_with_greenishblue_dark-removebg-preview.png'
import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME}></img>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Heading</h5>
              <small>Description in short</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Heading</h5>
              <small>Description in short</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Heading</h5>
              <small>Description in short</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam dolorem repellendus fugiat. Laborum, dicta eveniet reprehenderit doloremque praesentium suscipit quos aut, nostrum voluptates illo eum culpa odio harum aspernatur?
          Laboriosam eaque natus, nobis ipsam ex, in nam dolore ipsum </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About