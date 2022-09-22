import React from 'react'
import experiences from '../assets/constant/experiences'
import {StaticImage} from 'gatsby-plugin-image'
const Experience = () => {
  return (
    <section className='experiences-section'>
        <header  className='experiences-header'>
            <h1>Experiences</h1>
            <StaticImage src='../assets/images/canvas/blobflat.svg' layout='constrained' placeholder='tracedSVG' alt='blob' className='experiences-blob'/>
        </header>
        <section className='experiences-container'>
            {experiences.map(experience =>{
                const {id,role,company,year,task} = experience
                return <article key={id} className='experience'>
                    <h1>{role}</h1>
                    <h3>{company} / {year}</h3>
                    <ul>
                        {task.map((elm,idx) => {
                            return <p key={idx}>{elm}</p>
                        })}
                    </ul>
        <div className='separator'></div>
                </article>
            })}
        </section>
    </section>
  )
}

export default Experience