import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <header className='flex items-center justify-around w-full absolute py-5'>
      <div className='flex flex-col justify-center items-center'>
        <Link to='/'>
          <img src='./dopamine.svg' alt='dopamine logo' className='w-14' />
        </Link>
        {pathname === '/' ? (
          <div className='text-center text-yellow'>
            <h1>Dopamine</h1>
            <h4>HEALTHY FOOD</h4>
          </div>
        ) : (
          ''
        )}
      </div>
      <nav className='flex gap-20 text-white'>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/feedbacks'>Feedbacks</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
