import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/logo.png'
import tita from '../assets/tita.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg p-2 mt-3 nav-header'>
      <div className='container-fluid'>
        <article className='d-flex'>
          <img src={logo} alt='Logo' className='logo' />
          <img src={tita} alt='Logo' className='titalogo ms-2 mt-1' />
        </article>
        <button
          className='navbar-toggler nav-togg'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <GiHamburgerMenu className='ham-icon' />
        </button>
        <div
          className='collapse navbar-collapse navv-ul'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item p-3'>
              <Link to='/' className='linkk'>
                Home
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/SignUp' className='linkk'>
                About Us
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/Market' className='linkk'>
                Market
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/SignUp' className='linkk'>
                Resources
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/SignUp' className='linkk'>
                FAQs
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/SignUp' className='linkk'>
                Protocol Security
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/SignUp' className='linkk p-2'>
                <button className='signup'>Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
