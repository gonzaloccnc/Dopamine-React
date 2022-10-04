import TitleDecorate from '../../components/TitleDecorate'
import { BsArrowRight } from 'react-icons/bs'
import MenuCard from '../../components/MenuCard'
import dish1 from '../../../images/dish1.jpg'
import dish2 from '../../../images/dish2.jpg'
import dish3 from '../../../images/dish3.jpg'
import dish4 from '../../../images/dish4.jpg'

const MenuDefault = ({ state, set }) => {
  return (
    <>
      <TitleDecorate title='Menu' />
      <div className='flex justify-center flex-wrap gap-14'>
        <MenuCard title='Caramelized Squid Fillet' url={dish1} price='34' />
        <MenuCard
          title='Caramelized Squid Fillet'
          url={dish2}
          pos='topRight'
          price='28'
        />
        <MenuCard title='Caramelized Squid Fillet' url={dish3} price='41' />
        <MenuCard
          title='Caramelized Squid Fillet'
          url={dish4}
          pos='topRight'
          price='25'
        />
      </div>
      <div className='text-mustard mt-14 flex justify-center'>
        <h2
          className='flex items-center justify-center gap-2 cursor-pointer'
          onClick={() => set(!state)}
        >
          See all the Menu <BsArrowRight fontSize='30' />
        </h2>
      </div>
    </>
  )
}

export default MenuDefault
