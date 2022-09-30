import TitleDecorate from '../components/TitleDecorate'
import { BsArrowRight } from 'react-icons/bs'
import MenuCard from '../components/MenuCard'
import dish1 from '../../images/dish1.jpg'
import dish2 from '../../images/dish2.jpg'
import dish3 from '../../images/dish3.jpg'
import dish4 from '../../images/dish4.jpg'

const Menu = () => {
  return (
    <main className='w-full py-16'>
      <TitleDecorate title='Menu' />
      <div className='flex justify-center flex-wrap gap-14'>
        <MenuCard url={dish1} price='34' />
        <MenuCard url={dish2} pos='topRight' price='28' />
        <MenuCard url={dish3} price='41' />
        <MenuCard url={dish4} pos='topRight' price='25' />
      </div>
      <div className='text-mustard mt-10 py-20 flex justify-center'>
        <h2 className='flex items-center justify-center gap-2 cursor-pointer'>
          See all the Menu <BsArrowRight fontSize='30' />
        </h2>
      </div>
    </main>
  )
}

export default Menu
