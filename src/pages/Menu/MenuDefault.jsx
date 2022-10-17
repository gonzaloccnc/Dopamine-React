import TitleDecorate from '../../components/TitleDecorate'
import { BsArrowRight } from 'react-icons/bs'
import MenuCard from '../../components/MenuCard'
import dish1 from '../../../assets/dish1.jpg'
import dish2 from '../../../assets/dish2.jpg'
import dish3 from '../../../assets/dish3.jpg'
import dish4 from '../../../assets/dish4.jpg'

const MenuDefault = ({ state, set }) => {
  return (
    <>
      <TitleDecorate title='Menu' />
      <div className='grid md:grid-cols-4 xs:grid-cols-2 gap-y-8'>
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
