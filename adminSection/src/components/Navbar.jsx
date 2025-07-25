import React from 'react'
import logo from '../assets/zoro-logo.png'
import profilePic from '../assets/profilePic.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    {/* <nav className='flex items-center shadow-md bg-white px-20 py-4'>
      <img src={logo} alt='company logo' className='w-20' />
    </nav> */}
    
    <nav className='flex justify-between items-center px-20 py-2 shadow-md bg-white'>
          {/* <div className='flex items-center justify-between gap-4'> */}
              <img src={logo} alt='company logo' className='w-24' />
          {/* <div className=''> */}
              <ul className='flex gap-6 text-sm font-medium items-center text-gray-700'>
                  <li><Link to='/' className='text-orange-500'>Dashboard</Link></li>
                  <li><Link to='/career'>Career</Link></li>
                  <li><Link to='/team'>Team</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/verifyId'>Verify ID</Link></li>
                  <li><Link to='/location'>Location</Link></li>
                  <li><Link to='/projects'>Projects</Link></li>
                  <li><Link to='/contact'>Contact or Inquiries</Link></li>
          <img src={profilePic} alt="user" className='w-10 h-10 rounded-full' />
              </ul>
          {/* </div>
          </div> */}
    </nav>
    </>
  )
}

export default Navbar