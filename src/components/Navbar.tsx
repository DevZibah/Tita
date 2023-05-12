import React, { useContext, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link, useLocation } from 'react-router-dom'
import '../style/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/logo.png'
import tita from '../assets/tita.png'
import { NavbarContext } from '../contexts/NavbarContext'

const Navbar = () => {
  const location = useLocation()
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
        <div className='collapse navbar-collapse navv-ul' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item p-3'>
              <Link
                to='/'
                className='linkk'
                style={{
                  color: location.pathname === '/' ? '#155ed7' : 'black',
                }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/About'
                className='linkk'
                style={{
                  color: location.pathname === '/About' ? '#155ed7' : 'black',
                }}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/Market'
                className='linkk'
                style={{
                  color: location.pathname === '/Market' ? '#155ed7' : 'black',
                }}
              >
                Market
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/Resources'
                className='linkk'
                style={{
                  color:
                    location.pathname === '/Resources' ? '#155ed7' : 'black',
                }}
              >
                Resources
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/FAQs'
                className='linkk'
                style={{
                  color: location.pathname === '/FAQs' ? '#155ed7' : 'black',
                }}
              >
                FAQs
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/Protocol'
                className='linkk'
                style={{
                  color:
                    location.pathname === '/Protocol' ? '#155ed7' : 'black',
                }}
              >
                Protocol Security
              </Link>
            </li>
            <li className='nav-item p-3 connect-wallet'>
              {/* <Link to='/Dashboard' className='linkk p-2'> */}
              <ConnectButton />
              {/* <button className='signup'>Connect Wallet</button> */}
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
