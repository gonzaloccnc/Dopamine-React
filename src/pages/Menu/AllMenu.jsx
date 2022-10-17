import MenuCard from '../../components/MenuCard'
import dish1 from '../../../assets/dish1.jpg'
import dish2 from '../../../assets/dish2.jpg'
import dish3 from '../../../assets/dish3.jpg'
import dish4 from '../../../assets/dish4.jpg'
import { useEffect, useRef } from 'react'

const AllMenu = () => {
  const container = useRef(null)
  const main = useRef(null)

  const swap = e => {
    const active = document.querySelector('span.active')
    const items = document.querySelectorAll('.item-slide')

    active.classList.remove('active')
    e.target.classList.toggle('active')

    switch (e.target.id) {
      case '1':
        container.current.classList.remove('-ml-[100%]')
        container.current.classList.add('ml-0')
        break
      case '2':
        container.current.classList.remove('ml-0')
        container.current.classList.add('-ml-[100%]')
        break
    }
  }

  useEffect(() => {
    setTimeout(() => main.current.classList.remove('opacity-0'), 500)
  }, [])

  return (
    <>
      <div
        className='lg:w-[85%] xs:h-[520px] xs:w-full overflow-hidden lg:h-[744px] mx-auto opacity-0 transition-all
        duration-500'
        ref={main}
      >
        <div
          className='lg:w-[200%] xs:w-[400%] h-full flex transition-all ease-expo duration-700'
          ref={container}
        >
          <div className='flex xs:grid xs:grid-cols-2 md:py-16 lg:w-1/2 xs:w-full xs:content-center'>
            <div className='lg:flex w-full lg:flex-wrap xs:grid xs:grid-cols-2 gap-14 lg:justify-center'>
              <MenuCard
                url={dish1}
                title='Caramelized Squid Fillet'
                price='35'
              />
              <MenuCard
                url={dish2}
                title='Caramelized Squid Fillet2'
                pos='topRight'
                price='28'
              />
              <MenuCard
                url={dish3}
                title='Caramelized Squid Fillet3'
                price='41'
              />
              <MenuCard
                url={dish4}
                title='Caramelized Squid Fillet4'
                pos='topRight'
                price='25'
              />
            </div>
            <div className='lg:flex w-full lg:flex-wrap xs:grid xs:grid-cols-2 gap-14 lg:justify-center'>
              <MenuCard
                url={dish1}
                title='Caramelized Squid Fillet5'
                price='35'
              />
              <MenuCard
                url={dish2}
                title='Caramelized Squid Fillet6'
                pos='topRight'
                price='28'
              />
              <MenuCard
                url={dish3}
                title='Caramelized Squid Fillet7'
                price='41'
              />
              <MenuCard
                url={dish4}
                title='Caramelized Squid Fillet8'
                pos='topRight'
                price='25'
              />
            </div>
          </div>
          <div className='flex xs:grid xs:grid-cols-2 md:py-16 md:w-1/2 xs:w-full xs:content-center'>
            <div className='md:flex w-full md:flex-wrap xs:grid xs:grid-cols-2 gap-14 md:justify-center'>
              <MenuCard
                url={dish1}
                title='Caramelized Squid Fillet9'
                price='35'
              />
              <MenuCard
                url={dish2}
                title='Caramelized Squid Fillet10'
                pos='topRight'
                price='28'
              />
              <MenuCard
                url={dish3}
                title='Caramelized Squid Fillet11'
                price='41'
              />
              <MenuCard
                url={dish4}
                title='Caramelized Squid Fillet12'
                pos='topRight'
                price='25'
              />
            </div>
            <div className='md:flex w-full md:flex-wrap xs:grid xs:grid-cols-2 gap-14 md:justify-center'>
              <MenuCard
                url={dish1}
                title='Caramelized Squid Fillet13'
                price='35'
              />
              <MenuCard
                url={dish2}
                title='Caramelized Squid Fillet14'
                pos='topRight'
                price='28'
              />
              <MenuCard
                url={dish3}
                title='Caramelized Squid Fillet15'
                price='41'
              />
              <MenuCard
                url={dish4}
                title='Caramelized Squid Fillet16'
                pos='topRight'
                price='25'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <hr className='w-4 h-1 bg-mustard' />
        <span
          className='item-slide text-gray w-9 h-9 grid place-content-center rounded-full cursor-pointer active'
          id='1'
          onClick={swap}
        >
          1
        </span>
        <span
          className='item-slide text-gray w-9 h-9 grid place-content-center rounded-full cursor-pointer'
          id='2'
          onClick={swap}
        >
          2
        </span>
        <hr className='w-4 h-1 bg-mustard' />
      </div>
    </>
  )
}

export default AllMenu
