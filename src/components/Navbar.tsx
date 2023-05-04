import React from 'react'
import '../style/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg p-2'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          TITA
        </a>
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
          className='collapse navbar-collapse collapse
            navbar-collapse
            text-center
            d-md-flex
            justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Market
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Resources
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                FAQs
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Protocol Security
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
