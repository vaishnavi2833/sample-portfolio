import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ukv4loa', 'template_v1025zo', form.current, 'afHvYrdmp8gjXDiY5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href='mailto:dummyemail@gmail.com' target={'_blank'}>Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='icon'/>
            <h4>Linked In</h4>
            <h5>Vaishnavi Ladda</h5>
            <a href='https://www.linkedin.com/in/vaishnavi-ladda-3bb198234/' target={'_blank'}>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact