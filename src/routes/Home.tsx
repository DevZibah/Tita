import React, { useState } from 'react'
import coin from '../assets/coin.png'
import coin1 from '../assets/coin1.png'
import hero from '../assets/hero.png'
import arrow from '../assets/arrow.png'
import yen from '../assets/yen.jpg'
import Background from '../assets/Background.png'
import Investor from '../components/Investor'
import StartUp from '../components/StartUp'

const Home = () => {
  const [key, setKey] = useState(true)
  return (
    <section className='mt-2'>
      <article className='ellipse'></article>
      <img src={coin} alt='coin' className='coin' />
      <main className='sec-one text-center'>
        <div className='hero-ellipse'>
          <img src={hero} alt='hero' className='hero' />
          <article className='ellipse1'></article>
        </div>
        <div className='busstartup p-md-4 text-md-start'>
          <p className='text-one mt-5 p-1 p-md-0'>
            STARTUPS AND BUSINESS FUNDING, MADE EASY.
          </p>
          <p className='p-3 text-two p-md-0 mt-md-3'>
            We provide startups and women entrepreneurs a seamless way to get
            funded and investors a safe haven to invest in next big ideas.
          </p>
          <div className='div-button text-md-center'>
            <button className='buttn mt-md-2'>Get Started</button>
          </div>
        </div>
        <div className='hero-ellipse1'>
          <img src={hero} alt='hero' className='hero' />
          <article className='ellipse1'></article>
        </div>
      </main>
      <div className='p-3 text-center div-one'>
        <section className='sec-two mt-3 p-2 d-flex justify-content-md-center'>
          <article>
            <p className='MarSize text-capitalize'>Market Size</p>
          </article>
          <small className='vert-line me-2 ms-md-3'></small>
          <article className='color1'>
            <h4>$0.00</h4>
            <small>Funds Invested</small>
          </article>
          <small className='vert-line1 me-2 ms-md-3'></small>
          <article className='color2'>
            <h4>$0.00</h4>
            <small>Funds borrowed</small>
          </article>
          <small className='vert-line2 me-2 ms-md-3'></small>
          <article className='color3'>
            <h4>$0.00</h4>
            <small>Total Liquidity</small>
          </article>
        </section>
      </div>
      <section>
        <article className='text-end mt-3'>
          <div className='ellipse3 text-end'></div>
          <img src={coin1} alt='coin' className='coin yencoin' />
        </article>
        <main className='text-center mt-5 home-main p-md-4'>
          <div>
            <img src={arrow} className='arrow' alt='arrow' />
          </div>
          <div className='text-md-start'>
            <h3 className='text-one goal-text'>Our Goal</h3>
            <p className='p-3 text-three p-md-0'>
              Our goal is to make lending and borrowing easier by creating a
              sense of connection between startups, Investors, and entrepreneurs
              in a transparent, inclusive and secure ecosystem.
            </p>
          </div>
        </main>
        <article className='text-end yen-div'>
          <img src={yen} className='yencoin text-end yen-coin' alt='coin yen' />
        </article>
      </section>
      <article className='text-center mt-3 p-md-4 sect-three'>
        <section>
          <h3 className='text-one'>How It Works</h3>
          <main className='d-flex mt-3 mainn'>
            <p
              className='main-sec mt-1 p-2 inves'
              onClick={() => setKey(true)}
              style={{
                background: key ? '#155ed7' : '#f3f3f3',
                color: key ? 'white' : '#155ed7',
              }}
            >
              Investors
            </p>
            <p
              className='main-sec mt-1 p-2 start-up'
              onClick={() => setKey(!true)}
              style={{
                background: key ? '#f3f3f3' : '#155ed7',
                color: key ? '#155ed7' : 'white',
              }}
            >
              Start-Ups
            </p>
          </main>
          {key ? <Investor /> : <StartUp />}
        </section>
        <main className='mt-4 p-3'>
          <img src={Background} alt='background-image' className='back-image' />
          <h4 className='textt-three p-2'>
            TITA Token is a stable coin built on the Celo Blockchain that makes
            interacting with TITA perfect for high volume transactions.
          </h4>
          <h4 className='small-text'>Build with TITA </h4>
        </main>
        <div className='mt-4 mt-md-5'>
          <button className='buttn build-buttn'>Build With TITA</button>
        </div>
      </article>
    </section>
  )
}

export default Home
