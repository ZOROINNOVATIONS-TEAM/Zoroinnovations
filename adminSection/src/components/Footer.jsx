import React from 'react'
import logo from '../assets/zoro-logo.png';

const Footer = () => {
  return (
    <footer className='bg-[#0d0d1d] text-white px-10 py-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            <div>
                <img src={logo} alt="company logo" className='w-32 mb-4' />
                <p>Transforming businesses through innovative AI Solutions and cutting-edge technology.</p>
                <div className='flex space-x-4 mt-4'>
                    <a href="#"><i className='fab fa-linkedin'></i></a>
                    <a href="#"><i className='fab fa-twitter'></i></a>
                    <a href="#"><i className='fab fa-facebook'></i></a>
                </div>
            </div>
            <div>
                <h4 className='font-semibold mb-2'>Services</h4>
                <ul>
                    <li>Web Development</li>
                    <li>Custom Software</li>
                    <li>AI Applications</li>
                    <li>IT Consulting</li>
                </ul>
            </div>
            <div>
                <h4 className='font-semibold mb-2'>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Our Employee</li>
                    <li>Careers & certs</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h4 className='font-semibold mb-2'>Resources</h4>
                <ul>
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>Documentation</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>

        <div className="my-6 border-t border-gray-700"></div>

        <div className='mt-8 text-sm text-gray-400 flex justify-between'>
            <span>© 2025 Zoro Innovations. All rights reserved.</span>
            <span>Privacy Policy • Terms of Service</span>
        </div>
    </footer>
  )
}

export default Footer