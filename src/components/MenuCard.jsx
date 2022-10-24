import { direction } from '../helpers/decoration'

const MenuCard = ({ url, price, title, pos = 'bottomRight' }) => {
  const border = direction.get(pos)
  return (
    <div
      className={`lg:w-[220px] lg:h-[300px] md:max-w-[180px] md:w-[220px] md:min-h-[280px] xs:max-w-[125px] xs:h-[200px] justify-self-center relative 
      rounded-2xl before:content-[""] before:border before:border-mustard before:border-solid 
      before:w-full before:h-full before:absolute
      before:rounded-2xl ${border}`}
    >
      <div
        className='w-full h-full rounded-2xl bg-night text-center text-white pt-7 relative
           hover:shadow-lg hover:shadow-yellow'
      >
        <p className='w-3/5 mx-auto'>{title}</p>
        <img
          src={url}
          className='md:w-36 md:h-36 xs:w-16 xs:h-16 rounded-full object-cover mx-auto mt-7'
          alt='menu'
        />
        {pos.startsWith('top')
          ? (
            <span
              className='w-10 h-10 absolute bg-yellow rounded-full text-black font-bold grid
                place-content-center bottom-0 -right-4'
            >
              ${price}
            </span>
            )
          : (
            <span
              className='w-10 h-10 absolute bg-yellow rounded-full text-black font-bold grid
                place-content-center top-0 -right-4'
            >
              ${price}
            </span>
            )}
      </div>
    </div>
  )
}

export default MenuCard
