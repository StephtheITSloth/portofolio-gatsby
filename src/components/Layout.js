import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/styles.css'
const Layout = ({children}) => {
  return (
    <div styles={{width: '100vwp'}}>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout