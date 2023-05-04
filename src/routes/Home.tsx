import React from 'react'
import coin from '../assets/coin.png'
import hero from '../assets/hero.png'

const Home = () => {
  return (
    <section className='mt-2'>
      <article className='ellipse'></article>
      <img src={coin} alt='coin' className='coin' />
      <main className='sec-one text-center'>
        <div>
          <img src={hero} alt='hero' className='hero' />
          <article className='ellipse1'></article>
        </div>
        <div>
          <p className='text-one mt-5 p-1'>
            STARTUPS AND BUSINESS FUNDING, MADE EASY.
          </p>
          <p className='p-3 text-two'>
            We provide startups and women entrepreneurs a seamless way to get
            funded and investors a safe haven to invest in next big ideas.
          </p>
          <button className='buttn'>Get Started</button>
        </div>
      </main>
      <section className='sec-two'>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </section>
    </section>
  )
}

export default Home
