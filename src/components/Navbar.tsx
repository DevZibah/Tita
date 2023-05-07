import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/logo.png'
import tita from '../assets/tita.png'
import { NavbarContext } from '../contexts/NavbarContext'

const Navbar = () => {
  const {
    home,
    about,
    market,
    resources,
    faqs,
    protocol,
    setHome,
    setAbout,
    setMarket,
    setResources,
    setFaqs,
    setProtocol,
  } = useContext(NavbarContext)
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
                onClick={() => (
                  setHome(true),
                  setMarket(false),
                  setAbout(false),
                  setFaqs(false),
                  setProtocol(false),
                  setResources(false)
                )}
                style={{ color: home ? '#155ed7' : 'black' }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/About'
                className='linkk'
                onClick={() => (
                  setAbout(true),
                  setHome(false),
                  setMarket(false),
                  setFaqs(false),
                  setProtocol(false),
                  setResources(false)
                )}
                style={{ color: about ? '#155ed7' : 'black' }}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/Market'
                className='linkk'
                onClick={() => (
                  setMarket(true),
                  setAbout(false),
                  setHome(false),
                  setFaqs(false),
                  setProtocol(false),
                  setResources(false)
                )}
                style={{ color: market ? '#155ed7' : 'black' }}
              >
                Market
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/Resources'
                className='linkk'
                onClick={() => (
                  setResources(true),
                  setMarket(false),
                  setAbout(false),
                  setHome(false),
                  setFaqs(false),
                  setProtocol(false)
                )}
                style={{ color: resources ? '#155ed7' : 'black' }}
              >
                Resources
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/FAQs'
                className='linkk'
                onClick={() => (
                  setFaqs(true),
                  setResources(false),
                  setMarket(false),
                  setAbout(false),
                  setHome(false),
                  setProtocol(false)
                )}
                style={{ color: faqs ? '#155ed7' : 'black' }}
              >
                FAQs
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link
                to='/Protocol'
                className='linkk'
                onClick={() => (
                  setProtocol(true),
                  setFaqs(false),
                  setResources(false),
                  setMarket(false),
                  setAbout(false),
                  setHome(false)
                )}
                style={{ color: protocol ? '#155ed7' : 'black' }}
              >
                Protocol Security
              </Link>
            </li>
            <li className='nav-item p-3'>
              <Link to='/Dashboard' className='linkk p-2'>
                <button className='signup'>Connect Wallet</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
