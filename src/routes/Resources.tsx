import React from 'react'
import '../style/Resources.css'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { TbNews } from 'react-icons/tb'
import { IoLogoWordpress } from 'react-icons/io'
import { MdOutlineAnnouncement } from 'react-icons/md'
import { FaNewspaper } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

const Resources = () => {
  return (
    <section className='p-4 mt-2 sec-market'>
      <header>
        <h4 className='con-wal'>Resources</h4>
      </header>
      <div className='p-md-5 div-resour'>
        <section className='mt-4 mt-md-0'>
          <article className='d-flex ser-art p-2'>
            <p className=''>Search</p>
            <BiSearch className='bi-icon' />
          </article>
        </section>
        <main className='mt-4 main-resour justify-lg-center'>
          <section className='sec-resou'>
            <article className='d-flex art-resou p-1'>
              <HiOutlineNewspaper className='resou-icon' />
              <p className='ms-2'>All</p>
            </article>
            <article className='d-flex art-resou p-1'>
              <TbNews className='resou-icon' />
              <p className='ms-2'>News</p>
            </article>
            <article className='d-flex art-resou p-1'>
              <IoLogoWordpress className='resou-icon' />
              <p className='ms-2'>Press</p>
            </article>
          </section>
          <section className='sec-resou-one mt-3 mt-lg-0'>
            <article className='d-flex art-resour p-1'>
              <MdOutlineAnnouncement className='resou-icon' />
              <p className='ms-2'>Announcements</p>
            </article>
            <article className='d-flex art-resou p-1'>
              <FaNewspaper className='resou-icon' />
              <p className='ms-2'>Learn</p>
            </article>
          </section>
        </main>
        <section className='mt-5 text-center'>
          <TbNews className='tbnews' />
          <h4>Nothing to see here yet</h4>
          <p>Please check back soon</p>
        </section>
      </div>
    </section>
  )
}

export default Resources
