import MenuCard from '../../components/MenuCard'
import dish1 from '../../../images/dish1.jpg'
import dish2 from '../../../images/dish2.jpg'
import dish3 from '../../../images/dish3.jpg'
import dish4 from '../../../images/dish4.jpg'
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
        className='w-[85%] overflow-hidden h-[744px] mx-auto opacity-0 transition-all duration-500'
        ref={main}
      >
        <div
          className='w-[200%] h-full flex transition-all ease-expo duration-700'
          ref={container}
        >
          <div className='grid grid-cols-4 gap-14 flex-shrink-0 mx-auto py-16'>
            <MenuCard url={dish1} title='Caramelized Squid Fillet' price='35' />
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
          <div className='grid grid-cols-4 gap-14 flex-shrink-0 mx-auto py-16'>
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
