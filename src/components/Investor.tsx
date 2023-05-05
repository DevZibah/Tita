import React from 'react'
import star from '../assets/star.png'

const Investor = () => {
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
              <p className='text-start texxt-two'>
                Review our public funding Round
              </p>
            </div>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Four</p>
              </div>
              <p className='text-start texxt-two'>
                Pick the startup that interest you
              </p>
            </div>
          </section>
          <section className='grid-one mt-3 mt-lg-0'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Five</p>
              </div>
              <p className='text-start texxt-two'>
                Indicate interest and get connected to the startup
              </p>
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
                Buy the TITA token and stake it for any given period of time
              </p>
            </div>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Four</p>
              </div>
              <p className='text-start texxt-two'>Read through the contract.</p>
            </div>
          </section>
          <section className='grid-one mt-3 mt-lg-0'>
            <div className='p-3 divv-two'>
              <div className='d-flex'>
                <img src={star} className='star-icon' alt='star' />
                <p className='numb'>Five</p>
              </div>
              <p className='text-start texxt-two'>
                At the end of the given time, get your funds with APY
              </p>
            </div>
          </section>
        </article>
      </section>
    </section>
  )
}

export default Investor
