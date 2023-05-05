import React from 'react'
import star from '../assets/star.png'

const StartUp = () => {
  return (
    <section className=''>
      <section className='mt-4 text-center'>
        <article className='p-3 arrt-grid'>
          <section className='grid-one'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>One</p>
              </div>
              <p className='text-start texxt-two'>Sign up on our platform</p>
            </div>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Two</p>
              </div>
              <p className='text-start texxt-two'>
                Complete your KYC and ID Verification
              </p>
            </div>
          </section>
          <section className='grid-one mt-3 mt-lg-0'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Three</p>
              </div>
              <p className='text-start texxt-two'>Pick your Business Niche</p>
            </div>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Four</p>
              </div>
              <p className='text-start texxt-two'>
                Submit your Proposal/Funding request
              </p>
            </div>
          </section>
          <section className='grid-one mt-3 mt-lg-0'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Five</p>
              </div>
              <p className='text-start texxt-two'>Submit your Road-map</p>
            </div>
          </section>
        </article>
        <p className='text-one'>OR</p>
        <article className='p-3 arrt-grid'>
          <section className='grid-one'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>One</p>
              </div>
              <p className='text-start texxt-two'>Sign up on our platform</p>
            </div>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Two</p>
              </div>
              <p className='text-start texxt-two'>
                Click on the market button on the landing page
              </p>
            </div>
          </section>
          <section className='grid-one mt-3 mt-lg-0'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Three</p>
              </div>
              <p className='text-start texxt-two'>
                Click on the market page and check out our pool of funds
              </p>
            </div>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Four</p>
              </div>
              <p className='text-start texxt-two'>
                Read the contract on each fund and pick out which interests you
              </p>
            </div>
          </section>
          <section className='grid-one mt-3 mt-lg-0'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Five</p>
              </div>
              <p className='text-start texxt-two'>Contact Us</p>
            </div>
          </section>
        </article>
      </section>
    </section>
  )
}

export default StartUp
