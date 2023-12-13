import React from 'react'
import './projects.css'
import IMG from '../../assests/project-img.jpg'


const Projects = () => {
  const data=[
    {
      id:1,
      image: IMG,
      title: 'Heading',
      github: 'https://www.github.com',
      demo: 'https://www.github.com'
    },
    {
      id:2,
      image: IMG,
      title: 'Heading',
      github: 'https://www.github.com',
      demo: 'https://www.github.com'
    },
    {
      id:3,
      image: IMG,
      title: 'Heading',
      github: 'https://www.github.com',
      demo: 'https://www.github.com'
    },
    {
      id:4,
      image: IMG,
      title: 'Heading',
      github: 'https://www.github.com',
      demo: 'https://www.github.com'
    },
    {
      id:5,
      image: IMG,
      title: 'Heading',
      github: 'https://www.github.com',
      demo: 'https://www.github.com'
    },
    {
      id:6,
      image: IMG,
      title: 'Heading',
      github: 'https://www.github.com',
      demo: 'https://www.github.com'
    },
  ]
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container project_container'>{
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='project_item'>
            <div className='project-img'>
              <img src={image} alt='project-image'></img>
            </div>
            <h3>{title}</h3>
            <a href={github} className='btn' target={'_blank'}>Github</a>
            <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Projects