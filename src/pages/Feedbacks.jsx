import TitleDecorate from '../components/TitleDecorate'
import CardBorder from '../components/CardBorder'
import person from '../../assets/person.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
import { AiFillStar } from 'react-icons/ai'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs'
import { useRef } from 'react'
import Modal from '../components/Modal'
import useModal from '../hooks/useModal'

const Feedbacks = () => {
  const slider = useRef()
  const [modal, openModal] = useModal()

  const sliderFeedback = move => {
    const firstChild = slider.current.firstElementChild
    const lastChild = slider.current.lastElementChild

    if (move === 'left') {
      slider.current.classList.add('ml-[100%]')

      slider.current.classList.add(
        'transition-all',
        'ease-expo',
        'duration-700'
      )

      setTimeout(() => {
        slider.current.insertBefore(lastChild, firstChild)
        slider.current.classList.remove(
          'transition-all',
          'ease-expo',
          'duration-700'
        )
        slider.current.classList.remove('ml-[100%]')
      }, 800)
    } else {
      slider.current.classList.add('-ml-[100%]')
      slider.current.classList.add(
        'transition-all',
        'ease-expo',
        'duration-700'
      )

      setTimeout(() => {
        slider.current.appendChild(firstChild)
        slider.current.classList.remove(
          'transition-all',
          'ease-expo',
          'duration-700'
        )
        slider.current.classList.remove('-ml-[100%]')
      }, 800)
    }
  }

  return (
    <main className='py-16'>
      <TitleDecorate title='Feedbacks' />
      <div className='flex flex-wrap w-full md:h-[300px] mx-auto md:gap-20 xs:gap-10 xs:px-10 md:px-0 xs:mt-20 md:mt-0'>
        <div
          id='slider'
          className='flex gap-10 justify-center items-center h-full w-full'
        >
          {
            window.innerWidth > 768
              ? <BsFillArrowLeftCircleFill
                  fontSize='35'
                  fill='transparent'
                  stroke='#F8B525'
                  strokeWidth='1'
                  overflow='unset'
                  onClick={() => sliderFeedback('left')}
                />
              : ''
          }
          <div className='flex justify-around w-[700px] h-full overflow-hidden'>
            <div className='w-full'>
              <div className='w-[400%] flex' ref={slider}>
                <div className='flex justify-around w-full xs:gap-8' id='1'>
                  <CardBorder
                    url={person}
                    pos='bottomRight'
                    size='md:w-[250px] md:h-[250px] xs:w-20 xs:h-20'
                  />
                  <div className='text-white md:w-1/2 xs:w-3/4 relative'>
                    <h2>Martha</h2>
                    <p className='mt-5'>
                      Do yourself a favor and visit this lovely restaurant! The
                      service is unmatched. The staff truly cares about your
                      experience. The food is absolutely amazing - everything we
                      tasted melted in other mouths. Absolutely the best meal we
                      had while. Highly recommend!
                    </p>
                    <div className='flex absolute md:bottom-0 md:left-0 md:top-auto xs:top-2 xs:right-0'>
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                    </div>
                  </div>
                </div>
                <div className='flex justify-around w-full xs:gap-8' id='2'>
                  <CardBorder
                    url={person2}
                    pos='bottomRight'
                    size='md:w-[250px] md:h-[250px] xs:w-20 xs:h-20'
                  />
                  <div className='text-white md:w-1/2 xs:w-3/4 relative'>
                    <h2>Martha</h2>
                    <p className='mt-5'>
                      Do yourself a favor and visit this lovely restaurant! The
                      service is unmatched. The staff truly cares about your
                      experience. The food is absolutely amazing - everything we
                      tasted melted in other mouths. Absolutely the best meal we
                      had while. Highly recommend!
                    </p>
                    <div className='flex absolute md:bottom-0 md:left-0 md:top-auto xs:top-2 xs:right-0'>
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                    </div>
                  </div>
                </div>
                <div className='flex justify-around w-full xs:gap-8' id='3'>
                  <CardBorder
                    url={person3}
                    pos='bottomRight'
                    size='md:w-[250px] md:h-[250px] xs:w-20 xs:h-20'
                  />
                  <div className='text-white md:w-1/2 xs:w-3/4 relative'>
                    <h2>Martha</h2>
                    <p className='mt-5'>
                      Do yourself a favor and visit this lovely restaurant! The
                      service is unmatched. The staff truly cares about your
                      experience. The food is absolutely amazing - everything we
                      tasted melted in other mouths. Absolutely the best meal we
                      had while. Highly recommend!
                    </p>
                    <div className='flex absolute md:bottom-0 md:left-0 md:top-auto xs:top-2 xs:right-0'>
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                    </div>
                  </div>
                </div>
                <div className='flex justify-around w-full xs:gap-8' id='4'>
                  <CardBorder
                    url={person4}
                    pos='bottomRight'
                    size='md:w-[250px] md:h-[250px] xs:w-20 xs:h-20'
                  />
                  <div className='text-white md:w-1/2 xs:w-3/4 relative'>
                    <h2>Martha</h2>
                    <p className='mt-5'>
                      Do yourself a favor and visit this lovely restaurant! The
                      service is unmatched. The staff truly cares about your
                      experience. The food is absolutely amazing - everything we
                      tasted melted in other mouths. Absolutely the best meal we
                      had while. Highly recommend!
                    </p>
                    <div className='flex absolute md:bottom-0 md:left-0 md:top-auto xs:top-2 xs:right-0'>
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                      <AiFillStar fill='#FFD160' className='xs:text-h3 md:text-h1' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            window.innerWidth > 768
              ? <BsFillArrowRightCircleFill
                  fontSize='35'
                  fill='transparent'
                  stroke='#F8B525'
                  strokeWidth='1'
                  overflow='unset'
                  onClick={() => sliderFeedback('right')}
                />
              : ''
          }
        </div>
        <a href='#' className='buttom xs:text-h4 sm:text-h3' onClick={openModal}>
          Leave a Comment
        </a>
      </div>
      {modal
        ? (
          <Modal
            closeModal={openModal}
            message='It will be pleasant for us to know your opinion.'
            sendMessage='Thank you for you comment.'
            placeHolder1='Name'
            placeHolder2='Comment'
          />
          )
        : null}
    </main>
  )
}

export default Feedbacks
