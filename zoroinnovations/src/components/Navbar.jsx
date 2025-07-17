import React from 'react'
import Logo from '../assets/zoro-logo.png'

const Navbar = () => {
  return (
    <header className='bg-gray-50 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <img src={Logo} alt="Zoro Innovations Logo" className='h-8' />
            </div>

            {/* Nav Links */}
            <nav>
                <ul className='flex space-x-6 text-sm text-gray-700'> 
                    <li><a href="#" className='hover:text-blue-600'>Home</a></li>
                    <li><a href="#" className='hover:text-blue-600'>Services</a></li>
                    <li><a href="#" className='hover:text-blue-600'>About</a></li>
                    <li><a href="#" className='hover:text-blue-600'>Projects</a></li>
                    <li><a href="#" className='text-orange-500'>Blog</a></li>
                    <li><a href="#" className='hover:text-blue-600'>Careers & Certs</a></li>
                    <li><a href="#" className='hover:text-blue-600'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar