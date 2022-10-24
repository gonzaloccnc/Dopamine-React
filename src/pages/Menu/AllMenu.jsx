import MenuCard from '../../components/MenuCard'
import ButtonSlide from '../../components/ButtonSlide.jsx'
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

    active.classList.remove('active')
    e.target.classList.toggle('active')

    switch (e.target.id) {
      case '1':
        container.current.classList.remove('ml-0')
        container.current.classList.remove('-ml-[100%]')
        container.current.classList.remove('-ml-[200%]')
        container.current.classList.remove('-ml-[300%]')
        container.current.classList.add('ml-0')
        break
      case '2':
        container.current.classList.remove('ml-0')
        container.current.classList.remove('-ml-[100%]')
        container.current.classList.remove('-ml-[200%]')
        container.current.classList.remove('-ml-[300%]')
        container.current.classList.add('-ml-[100%]')
        break
      case '3':
        container.current.classList.remove('ml-0')
        container.current.classList.remove('-ml-[100%]')
        container.current.classList.remove('-ml-[200%]')
        container.current.classList.remove('-ml-[300%]')
        container.current.classList.add('-ml-[200%]')
        break
      case '4':
        container.current.classList.remove('ml-0')
        container.current.classList.remove('-ml-[100%]')
        container.current.classList.remove('-ml-[200%]')
        container.current.classList.remove('-ml-[300%]')
        container.current.classList.add('-ml-[300%]')
        break
    }
  }

  useEffect(() => {
    setTimeout(() => main.current.classList.remove('opacity-0'), 500)
  }, [])

  return (
    <>
      <div
        className='lg:w-[85%] xs:h-[520px] xs:w-full overflow-hidden md:h-[744px] mx-auto opacity-0 transition-all
        duration-500'
        ref={main}
      >
        <div
          className='lg:w-[200%] xs:w-[400%] h-full flex transition-all ease-expo duration-700'
          ref={container}
        >
          <div className='grid grid-cols-4 w-1/2 pt-10'>
            <MenuCard url={dish1} title='Granada with yogurt 1' price='21' />
            <MenuCard url={dish2} title='Granada with yogurt 2' price='34' pos='topRight' />
            <MenuCard url={dish3} title='Granada with yogurt 3' price='41' pos='bottomRight' />
            <MenuCard url={dish4} title='Granada with yogurt 4' price='25' pos='topRight' />
            <MenuCard url={dish1} title='Granada with yogurt 5' price='51' pos='bottomRight' />
            <MenuCard url={dish2} title='Granada with yogurt 6' price='28' pos='topRight' />
            <MenuCard url={dish3} title='Granada with yogurt 7' price='55' pos='bottomRight' />
            <MenuCard url={dish4} title='Granada with yogurt 8' price='61' pos='topRight' />
          </div>
          <div className='grid grid-cols-4 w-1/2 pt-10'>
            <MenuCard url={dish1} title='Granada with yogurt 1' price='21' />
            <MenuCard url={dish2} title='Granada with yogurt 2' price='34' pos='topRight' />
            <MenuCard url={dish3} title='Granada with yogurt 3' price='41' pos='bottomRight' />
            <MenuCard url={dish4} title='Granada with yogurt 4' price='25' pos='topRight' />
            <MenuCard url={dish1} title='Granada with yogurt 5' price='51' pos='bottomRight' />
            <MenuCard url={dish2} title='Granada with yogurt 6' price='28' pos='topRight' />
            <MenuCard url={dish3} title='Granada with yogurt 7' price='55' pos='bottomRight' />
            <MenuCard url={dish4} title='Granada with yogurt 8' price='61' pos='topRight' />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center md:gap-5 xs:gap-1'>
        <hr className='w-4 h-1 bg-mustard' />
        {
          window.innerWidth > 768
            ? (
              <>
                <ButtonSlide fn={swap} id='1' activeFirst />
                <ButtonSlide fn={swap} id='2' />
              </>
              )
            : (
              <>
                <ButtonSlide fn={swap} id='1' activeFirst />
                <ButtonSlide fn={swap} id='2' />
                <ButtonSlide fn={swap} id='3' />
                <ButtonSlide fn={swap} id='4' />
              </>
              )
        }
        <hr className='w-4 h-1 bg-mustard' />
      </div>
    </>
  )
}

export default AllMenu
