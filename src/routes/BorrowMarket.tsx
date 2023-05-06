import React from 'react'
import Frame from '../assets/Frame.png'


const BorrowMarket = () => {
  return (
    <section className='p-4 mt-2 sec-market'>
      <header>
        <h4 className='con-wal'>Borrowers Market</h4>
      </header>
      <main className='mt-4 p-3 bloc-arti text-uppercase'>
        <article>
          <div className='d-flex'>
            <img className='cel-img' src={Frame} alt='Frame' />
            <p className='text-uppercase ms-2 cel-textt'>celo</p>
          </div>
          <hr className='hor-mar' />
          <section className='inves-sec'>
            <article className='d-flex'>
              <p>APY</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Market</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Collateral</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
          </section>
        </article>
      </main>
      <main className='mt-4 p-3 bloc-arti text-uppercase'>
        <article>
          <div className='d-flex'>
            <img className='cel-img' src={Frame} alt='Frame' />
            <p className='text-uppercase ms-2 cel-textt'>usdt</p>
          </div>
          <hr className='hor-mar' />
          <section className='inves-sec'>
            <article className='d-flex'>
              <p>APY</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Market</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Collateral</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
          </section>
        </article>
      </main>
      <main className='mt-4 p-3 bloc-arti text-uppercase'>
        <article>
          <div className='d-flex'>
            <img className='cel-img' src={Frame} alt='Frame' />
            <p className='text-uppercase ms-2 cel-textt'>tia</p>
          </div>
          <hr className='hor-mar' />
          <section className='inves-sec'>
            <article className='d-flex'>
              <p>APY</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Market</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Collateral</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
          </section>
        </article>
      </main>
      <main className='mt-4 p-3 bloc-arti text-uppercase'>
        <article>
          <div className='d-flex'>
            <img className='cel-img' src={Frame} alt='Frame' />
            <p className='text-uppercase ms-2 cel-textt'>eth</p>
          </div>
          <hr className='hor-mar' />
          <section className='inves-sec'>
            <article className='d-flex'>
              <p>APY</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Market</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
            <article className='d-flex'>
              <p>Collateral</p>
              <p className='ms-2 inves-text'>0.00</p>
            </article>
          </section>
        </article>
      </main>
    </section>
  )
}

export default BorrowMarket
