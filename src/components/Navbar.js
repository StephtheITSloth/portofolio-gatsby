import React, {useState} from 'react'
import {Link} from 'gatsby'
import { MdDehaze} from "react-icons/md";
import { StaticImage } from 'gatsby-plugin-image'
import SideBar from './SideBar';
const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <>
    <nav>
      <div className='nav-section'>
        <Link to='/'><StaticImage src='../assets/images/canvas/skdlogo.svg' alt='logo' placeholder='tracedSVG' layout='fixed' width={150} className='nav-img'/></Link>
        <MdDehaze className='nav-icon' onClick={() => setIsMenu(!isMenu)}/>
        {isMenu && <SideBar toggle={setIsMenu}/>}
      </div>
    </nav>
    <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className='curved-svg'>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
    </>
  )
}

export default Navbar