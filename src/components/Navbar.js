import React, {useState} from 'react'
import {Link} from 'gatsby'
import { MdDehaze} from "react-icons/md";
import { StaticImage } from 'gatsby-plugin-image'
import NavbarLinks from './NavbarLinks'
import SideBar from './SideBar';
const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <nav>
      <div className='nav-section'>
        <Link to='/'><StaticImage src='../assets/images/canvas/skdlogo.svg' alt='logo' placeholder='tracedSVG' layout='fixed' width={150} className='nav-img'/></Link>
        <NavbarLinks />
        <MdDehaze className='nav-icon' onClick={() => setIsMenu(!isMenu)}/>
        {isMenu && <SideBar toggle={setIsMenu}/>}
      </div>
    </nav>
      )
}

export default Navbar