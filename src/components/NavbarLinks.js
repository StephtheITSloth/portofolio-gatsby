import React from 'react'
import {Link} from 'gatsby'
const NavbarLinks = () => {
  return (
    <ul className='nav-links__widescreen'>
            <Link to='/'>Home</Link>
            <Link to='/about' id='hero-section'>About</Link>
            <Link to='/contact'>Contact</Link>
    </ul>  
    )
}

export default NavbarLinks