import React from 'react'
const SingleProject = ({project}) => {
    const {title,status,url,image, techs} = project
  return (
    <a href={url} className='project-card'>
            <img src={image} alt='title'/>
        <div className='project-info'>
            <h2 className='project-title'>{title}</h2>
            <h3>Techs: {techs}</h3>
            <h4> Status: {status}</h4>
        </div>
    </a>
  )
}

export default SingleProject
