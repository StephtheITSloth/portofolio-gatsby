import React, {useState} from 'react'
import {Link} from 'gatsby'
import { MdOutlineClose } from "react-icons/md"
const SideBar = () => {
    const [isMenu, setIsMenu] = useState(true)
  return (
    <>
    

        {isMenu && <div className='sidebar'>
            <MdOutlineClose className='sidebar-icon' onClick={() =>setIsMenu(false)}/>
            <ul className='flex-column'>

                    <Link to='/' onClick={() =>setIsMenu(false)}>Home</Link>
                    <Link to='/about' onClick={() =>setIsMenu(false)}>About</Link>
                    <Link to='/projects' onClick={() =>setIsMenu(false)}>Projects</Link>
                    <Link to='/contact' onClick={() =>setIsMenu(false)}>Contact</Link>
            </ul>
        </div>}
    </>
  )
}

export default SideBar