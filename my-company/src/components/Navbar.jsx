import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <Link to={'/Home'}>Home</Link>
      <Link to={'/About'}>About</Link>
      <Link to={'/Services'}>Services</Link>
      <Link to={'/Contact'}>Contact</Link>
    </div>
  )
}

export default Navbar
