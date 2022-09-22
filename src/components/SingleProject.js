import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'

const SingleProject = ({project}) => {
    const {title,date,status,url,mvp,image} = project
  return (
    <div className='project-card'>
        <div className='project-img'>
            {image && <img src={image} alt='title'/>}
            {!image && <p>{status}</p>}
        </div>
        <div className='project-info'>
            <h4 className='project-title'>{title}</h4>
            <p>Started: {date}</p>
            <p> Status: {status}</p>
            <a href={url}>Click me!</a>
            <></>
        </div>
    </div>
  )
}

export default SingleProject

// title: 'Recipes Dummy App',
// date: '9/2022',
// status: 'completed',
// url: 'https://recipes-for-dummies-dummy.netlify.app/',
// mvp: [
//     'Built with Gatsby, Graphql, Contenful, FormSpree, SEO, and deployed on Netlify with continuous integration',
//     'Users browse through recipes, can submit his/her contact with a form',
//     'Filtered recipes by category, and ',
//     'Have to reimplement SEO with new Gatsby Head syntax'
// ],
// image: '../images/projectsScreenShot/Recipes Dummy.png',
// id: 1