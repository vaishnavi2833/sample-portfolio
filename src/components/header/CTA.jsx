import React from 'react';
import CV from '../../assests/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA