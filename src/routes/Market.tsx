import React from 'react'
import '../style/Market.css'
import bnb from '../assets/bnb.png'
import usdt from '../assets/usdt.png'
import tia from '../assets/tia.png'
import celo from '../assets/celo.png'
import { HiOutlineCubeTransparent } from 'react-icons/hi'
import { MdOutlineAllInclusive } from 'react-icons/md'
import { MdOutlineToken } from 'react-icons/md'

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
              <img className='cel-img' src={celo} alt='celo' />
              <p className='text-uppercase ms-2 name-icon'>Celo</p>
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
              <img className='cel-img' src={tia} alt='tia' />
              <p className='text-uppercase ms-2 name-icon'>tia</p>
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
              <img className='cel-img' src={usdt} alt='usdt' />
              <p className='text-uppercase ms-2 name-icon'>usdt</p>
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
              <img className='cel-img' src={bnb} alt='bnb' />
              <p className='text-uppercase ms-2 name-icon'>bnb</p>
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
      <main className='mt-5 main-three'>
        <article className='p-4 art-three'>
          <HiOutlineCubeTransparent className='cel-img' />
          <h4 className='mt-3'>Transparent</h4>
          <p>
            Our decentralized micro-lending platform uses blockchain technology
            to provide transparency in the lending process.
          </p>
        </article>
        <article className='p-4 mt-3 art-three mt-md-0'>
          <MdOutlineAllInclusive className='cel-img' />
          <h4 className='mt-3'>Inclusive</h4>
          <p>
            Our decentralized micro-lending platform can provide access to
            credit to undeserved communities that may not have access to
            traditional banking systems.
          </p>
        </article>
        <article className='p-4 mt-3 art-three mt-md-0'>
          <MdOutlineToken className='cel-img' />
          <h4 className='mt-3'>Tokenized</h4>
          <p>
            TITA represents an asset or security as a digital token on a
            blockchain.
          </p>
        </article>
      </main>
    </section>
  )
}

export default Market
