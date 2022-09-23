import React from 'react'
import projects from '../assets/constant/projects'
import {StaticImage} from 'gatsby-plugin-image'
import SingleProject from './SingleProject'
const Projects = () => {
  return (
    <section className='projects-section'>
      <header className='projects-header'>
        <StaticImage src='../assets/images/canvas/project.png' alt='tractor' layout='fixed' placeholder='blurred' width={650} className='tractor'/>
        <h1>Projects</h1>
      </header>
      <section className='projects-container'>
        {projects.map(project => {
          return <SingleProject project={project} key={project.id}/>
        })}
      </section>
    </section>
  )
}

export default Projects