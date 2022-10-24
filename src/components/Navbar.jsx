import { Link, NavLink, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/dopamine.svg'

const Navbar = () => {
  const { pathname } = useLocation()
  const showMenuMobile = () => {
    document.querySelector('#menu-mobile').classList.toggle('hidden')
  }

  return (
    <header className='flex items-center xs:justify-between xs:px-5 md:justify-around w-full absolute xs:py-2 md:py-5'>
      <div className='flex flex-col justify-center items-center'>
        <Link to='/'>
          <img src={logo} alt='dopamine logo' className='xs:w-8 md:w-14' />
        </Link>
        {pathname === '/'
          ? (
            <div className='text-center text-yellow'>
              <h1 className='xs:text-h4 md:text-h1'>Dopamine</h1>
              <h4 className='xs:text-mobile md:text-h4'>HEALTHY FOOD</h4>
            </div>
            )
          : (
              ''
            )}
      </div>
      <nav className='lg:gap-20 text-white xs:hidden md:flex md:gap-10'>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/feedbacks'>Feedbacks</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
      </nav>
      <div className='xs:flex md:hidden xs:relative'>
        <GiHamburgerMenu fill='#F8B525' onClick={showMenuMobile} />
        <div
          className='bg-mustard fixed top-0 left-0 w-full h-screen z-50 hidden'
          id='menu-mobile'
          onClick={showMenuMobile}
        >
          <nav className='text-white flex flex-col gap-5 w-full text-center justify-center h-full'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/feedbacks'>Feedbacks</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
