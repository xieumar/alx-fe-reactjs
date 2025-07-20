import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar' style={{ display: 'flex',
                                     justifyContent: 'space-around',
                                     alignItems: 'center',
                                     backgroundColor: '#f8f9fa',
                                     padding: '20px',
                                      margin: '0 100px' }}>
      <Link to={'/Home'}>Home</Link>
      <Link to={'/About'}>About</Link>
      <Link to={'/Services'}>Services</Link>
      <Link to={'/Contact'}>Contact</Link>
    </div>
  )
}

export default Navbar
