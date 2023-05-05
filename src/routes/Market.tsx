import React from 'react'
import '../style/Market.css'
import Frame from '../assets/Frame.png'

const Market = () => {
  return (
    <section className='p-4 mt-2 sec-market'>
      <header>
        <h4 className='con-wal'>Connect Wallet</h4>
      </header>
      <main className='mt-4'>
        <h5 className='mar-texxt'>Markets</h5>
        <section className='mt-3'>
          <article className='grid-mark'>
            <div className='divv-mar p-3'>
              <p className='market-textt'>Total Supply</p>
              <p className='market-p'>0.00</p>
            </div>
            <div className='divv-mar p-3'>
              <p className='market-textt'>Total Borrow</p>
              <p className='market-p'>0.00</p>
            </div>
          </article>
          <article className='grid-mark mt-4'>
            <div className='divv-mar p-3'>
              <p className='market-textt'>Available Liquidity</p>
              <p className='market-p'>0.00</p>
            </div>
            <div className='divv-mar p-3'>
              <p className='market-textt'>Total Treasure</p>
              <p className='market-p'>0.00</p>
            </div>
          </article>
        </section>
      </main>
      <article className='mt-5'>
        <div className='d-flex'>
          <p className='mt-2 market-p mt-md-1'>Sort By</p>
          <section>
            <div className='dropdown ms-2'>
              <button
                className='dropdown-toggle drop-buttn p-2'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Total Supply
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Total Borrow
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Available Liquidity
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Total Treasure
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <section className='mt-4'>
          <main>
            <div className='d-flex'>
              <img className='cel-img' src={Frame} alt='Frame' />
              <p className='text-uppercase ms-2'>Celo</p>
            </div>
            <article className='p-3 bloc-arti'>
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Supply</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Supply APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Liquidity</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
              <hr className='hor-mar' />
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Borrow</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Borrow APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Collateral F</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
            </article>
            <main className='mt-3 bloc-arti p-4 bloc-main text-center'>
              <div>
                <p className='mar-pp'>Price</p>
                <p className='fs-5 mart-pp'>0.00</p>
              </div>
            </main>
          </main>
          <main className='mt-4'>
            <div className='d-flex'>
              <img className='cel-img' src={Frame} alt='Frame' />
              <p className='text-uppercase ms-2'>tia</p>
            </div>
            <article className='p-3 bloc-arti'>
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Supply</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Supply APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Liquidity</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
              <hr className='hor-mar' />
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Borrow</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Borrow APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Collateral F</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
            </article>
            <main className='mt-3 bloc-arti p-4 bloc-main text-center'>
              <div>
                <p className='mar-pp'>Price</p>
                <p className='fs-5 mart-pp'>0.00</p>
              </div>
            </main>
          </main>
          <main className='mt-4'>
            <div className='d-flex'>
              <img className='cel-img' src={Frame} alt='Frame' />
              <p className='text-uppercase ms-2'>usdt</p>
            </div>
            <article className='p-3 bloc-arti'>
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Supply</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Supply APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Liquidity</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
              <hr className='hor-mar' />
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Borrow</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Borrow APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Collateral F</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
            </article>
            <main className='mt-3 bloc-arti p-4 bloc-main text-center'>
              <div>
                <p className='mar-pp'>Price</p>
                <p className='fs-5 mart-pp'>0.00</p>
              </div>
            </main>
          </main>
          <main className='mt-4'>
            <div className='d-flex'>
              <img className='cel-img' src={Frame} alt='Frame' />
              <p className='text-uppercase ms-2'>bnb</p>
            </div>
            <article className='p-3 bloc-arti'>
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Supply</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Supply APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Liquidity</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
              <hr className='hor-mar' />
              <section className='d-flex bloc-sec'>
                <div>
                  <p className='mar-pp'>Total Borrow</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Borrow APY</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
                <div>
                  <p className='mar-pp'>Collateral F</p>
                  <p className='fs-5 mart-pp'>0.00</p>
                </div>
              </section>
            </article>
            <main className='mt-3 bloc-arti p-4 bloc-main text-center'>
              <div>
                <p className='mar-pp'>Price</p>
                <p className='fs-5 mart-pp'>0.00</p>
              </div>
            </main>
          </main>
        </section>
      </article>
    </section>
  )
}

export default Market
