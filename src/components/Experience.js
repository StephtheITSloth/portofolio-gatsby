import React from 'react'
import experiences from '../assets/constant/experiences'
const Experience = () => {
  return (
    <section className='experiences-section'>
    <div className='skew'>
        <header  className='experiences-header'>
            <h1>Experiences</h1>
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
        </div>
    </section>
  )
}

export default Experience