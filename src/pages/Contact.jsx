import React from 'react'
import SubtitleDecorate from '../components/SubtitleDecorate'
import TitleDecorate from '../components/TitleDecorate'
import map from '../../assets/map.jpg'
import CardBorder from '../components/CardBorder'
import Modal from '../components/Modal'
import useModal from '../hooks/useModal'

const Contact = () => {
  const [modal, openModal] = useModal()
  const modalO = e => {
    e.preventDefault()
    openModal(!modal)
  }

  return (
    <main className='md:py-16 xs:pt-12 h-screen'>
      <TitleDecorate title='Contact us' />
      <div className='flex xs:flex-row-reverse md:flex-row justify-around xs:gap-8 xs:pl-5'>
        <div className='md:w-80 flex flex-col md:gap-16 xs:gap-6'>
          <div className='xs:flex xs:flex-col md:block xs:items-end xs:px-5 md:px-0'>
            <SubtitleDecorate title='Address' />
            <p className='text-white mt-5 xs:text-end md:text-start'>
              24 Dovercroft Pl SE, Calgary, Canada
            </p>
          </div>
          <div className='xs:flex xs:flex-col md:block xs:items-end xs:px-5 md:px-0'>
            <SubtitleDecorate title='Number' />
            <p className='text-white mt-5 xs:text-end md:text-start'>
              +1 231 - 201 - 1108
            </p>
          </div>
          <div className='xs:flex xs:flex-col md:block xs:items-end xs:px-5 md:px-0'>
            <SubtitleDecorate title='Schedule' />
            <p className='text-white mt-5 xs:text-end md:text-start'>
              Mon. - Fri.:8 a.m - 8 p.m.
              <br />
              Sat. Sun.:9 a.m - 7 p.m.
            </p>
          </div>
          <div className='xs:hidden md:block'>
            <a href='#' className='buttom' onClick={modalO}>
              Reserve a Table
            </a>
          </div>
        </div>
        <CardBorder
          url={map}
          size='lg:w-[480px] lg:h-[480px] xs:h-[160px] xs:mx-0 xs:mt-0 sm:h-[300px]'
          pos='bottomRight'
        />
      </div>
      <div className='sm:text-h3 xs:text-h4 md:hidden mt-10 xs:grid xs:place-content-center'>
        <a href='#' className='buttom' onClick={modalO}>
          Reserve a Table
        </a>
      </div>
      {modal ? (
        <Modal
          closeModal={openModal}
          message='Please leave your contact number and we will call you back.'
          sendMessage='Thank you! We will call you in a minute'
          placeHolder1='Name'
          placeHolder2='Number'
          type2='number'
        />
      ) : null}
    </main>
  )
}

export default Contact
