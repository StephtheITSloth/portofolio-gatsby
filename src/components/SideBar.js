import React from 'react'
import {Link} from 'gatsby'
import { MdOutlineClose } from "react-icons/md"
const SideBar = ({toggle}) => {
  return (
    <>
    

        <div className='sidebar'>
            <MdOutlineClose className='sidebar-icon' onClick={() =>toggle(false)}/>
            <ul className='flex-column'>

                    <Link to='/' onClick={() =>toggle(false)}>Home</Link>
                    <Link to='/experiences' onClick={() =>toggle(false)}>Experience</Link>
                    <Link to='/about' id='hero-section' onClick={() =>toggle(false)}>About</Link>
                    <Link to='/projects' id='project-section' onClick={() =>toggle(false)}>Projects</Link>
                    <Link to='/contact' onClick={() =>toggle(false)}>Contact</Link>
            </ul>
        </div>
    </>
  )
}

export default SideBar