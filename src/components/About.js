import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import { AiFillLinkedin,  AiOutlineGithub, AiFillTwitterCircle} from "react-icons/ai";
import {Link} from 'gatsby'
const About = () => {
  return (
    <div className='hero'>
        <section className='hero-section'>
          <article className='hero-info'>
            <div>
              <h1 className='hero-header'>Hi!  I am Stephane karim.</h1>
              <h3>A passionate fullstack  javascript engineer with a background in Biology.</h3>
              <p>Thank you for stopping by!</p>
            </div>
            <div className='social-links'>
              <a href='https://www.linkedin.com/in/stephane-karim/'><AiFillLinkedin /></a>
              <a href='https://github.com/StephtheITSloth'><AiOutlineGithub /></a>
              <a href='https://twitter.com/home'><AiFillTwitterCircle /></a>
            </div>
            <Link to='/contact' className='hero-btn' >Contact Me!</Link>
          </article>
          <article className='hero-img'>
            <StaticImage src='../assets/images/canvas/webdev.svg' alt='web-dev' layout='constrained' placeholder='traceSVG' className='hero-img'/>
          </article>
        </section>
    </div>
  )
}

export default About