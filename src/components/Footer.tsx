import React from 'react'
import '../style/Footer.css'
import logo from '../assets/logo.png'
import tita from '../assets/tita.png'
import { RxInstagramLogo } from 'react-icons/rx'
import { IoLogoFacebook } from 'react-icons/io'
import { IoLogoTwitter } from 'react-icons/io'
import { IoLogoLinkedin } from 'react-icons/io'
import { IoLogoYoutube } from 'react-icons/io'

const Footer = () => {
  return (
    <section className='mt-2 p-4 sec-four p-md-1'>
      <article className='arti-one p-md-4'>
        <main>
          <article className='d-flex'>
            <img src={logo} alt='Logo' className='logo' />
            <img src={tita} alt='Logo' className='titalogo ms-2 mt-1' />
          </article>
          <div>
            <p className='mt-3 foot-textt'>
              We provide startups and women entrepreneurs a seamless way to get
              funded and investors a safe haven to invest in next big ideas.
            </p>
          </div>
        </main>
       
      </article>
      <hr className='linee' />
      <section className='text-center mt-4'>
        <h4 className='text-one'>Join Our Community!</h4>
        <main className='d-flex main-icons mt-md-5'>
          <p className='icon-text'>Follow Us:</p>
          <div>
            <a target='_blank' href="https://www.instagram.com/invites/contact/?i=4jwv8vv0eqi3&utm_content=rdaud4j"><RxInstagramLogo className='ms-2 iconns' /></a>
            {/* <a target='_blank' href=""><IoLogoFacebook className='ms-3 iconns' /></a> */}
            <a target='_blank' href="https://twitter.com/TitaGlobal?t=gOeGfK_a9quu4vAdfyrjXA&s=09"><IoLogoTwitter className='ms-3 iconns' /></a>
            <a target='_blank' href="https://www.linkedin.com/in/tita-global-1995b4275"><IoLogoLinkedin className='ms-3 iconns' /></a>
            {/* <IoLogoYoutube className='ms-3 iconns' /> */}
          </div>
        </main>
        <p className='footter-text mt-1'>
          contact us: Techtitansglobal@gmail.com
        </p>
        <p className='footter-text'>Home</p>
        <p className='footter-text'>Resources</p>
        <p className='footter-text'>About Us</p>
        <p className='footter-text'>Contact Us</p>
      </section>
      <hr className='linee mt-4' />
      <p className='footter-text text-center mt-3'>
        Copyright © 2023 | All Rights Reserved.
      </p>
      <hr className='linee mt-4' />
    </section>
  )
}

export default Footer
