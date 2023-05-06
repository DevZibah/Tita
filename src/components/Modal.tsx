import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Dashboard.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = (props) => {
  if (props.open === false) {
    return null
  }
  return (
    <section className='modal p-4'>
      <div className='modal-content p-3'>
        <div className='text-end fs-3'>
          <AiOutlineCloseCircle onClick={props.onClose} className='exit-icon' />
        </div>
        <main className='text-center'>
          <h4 className='mar-texxt'>Markets</h4>
          <article className='mt-3'>
            <p className='mod-text'>Choose an Option</p>
            <section className='mb-5 mt-4 modal-sec d-flex'>
              <Link to='/InvestMarket' className='linkk p-2'>
                <button className='mod-buttn'>Invest</button>
              </Link>
              <Link to='/BorrowMarket' className='linkk p-2'>
                <button className='mod-buttn'>Borrow</button>
              </Link>
            </section>
          </article>
        </main>
      </div>
    </section>
  )
}

export default Modal
