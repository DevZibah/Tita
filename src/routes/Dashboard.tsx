import React, { useState } from 'react'
import '../style/Dashboard.css'
import safelock from '../assets/safelock.png'
import Modal from '../components/Modal'

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className='p-4 mt-2 sec-market'>
      <header>
        <h4 className='con-wal' onClick={() => setOpen(true)}>
          Dashboard
        </h4>
        <Modal open={open} onClose={() => setOpen(false)} />
      </header>
      <main className='mt-4 p-3 bloc-arti'>
        <h5 className='mar-texxt'>My Accounts</h5>
        <section className='mt-3'>
          <article className='d-flex'>
            <p className='mar-pp'>Net APY:</p>
            <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
          </article>
          <section>
            <article className='d-flex'>
              <p className='mar-pp'>Daily Earnings:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
            <article className='d-flex'>
              <p className='mar-pp'>Supply Balance:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
            <article className='d-flex'>
              <p className='mar-pp'>Borrow Balance:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
          </section>
          <hr className='hor-mar' />
          <section className='dash-sec d-md-flex'>
            <article className='d-flex'>
              <p className='mar-pp'>Borrow Limit Used:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
            <article className='d-flex'>
              <p className='mar-pp'>Limit:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
          </section>
          <article className='d-flex justify-content-end'>
            <div className='d-flex'>
              <img src={safelock} alt='safelock' className='lock' />
              <p className='mar-pp ms-2'>Your Safe Limit</p>
            </div>
            <div>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00</p>
            </div>
          </article>
        </section>
      </main>
    </section>
  )
}

export default Dashboard
