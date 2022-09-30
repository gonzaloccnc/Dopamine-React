import CardBorder from './CardBorder'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ArticleAbout = ({ subtitle, url, first, children, pos, last }) => {
  return (
    <div className='flex px-40 gap-10 py-5'>
      {first ? (
        <CardBorder url={url} pos={pos} size='w-[400px] h-[324px]' />
      ) : (
        ''
      )}
      <div className='w-1/2 py-10 relative'>
        <h2 className='flex items-center gap-2 justify-start'>
          <hr className='w-4 h-1 bg-mustard' />
          <span className='text-white'>{subtitle}</span>
        </h2>
        <p className='text-white text-h3 mt-10'>{children}</p>
        {last ? (
          <BsFillArrowUpCircleFill
            fontSize='35'
            fill='transparent'
            stroke='#F8B525'
            strokeWidth='1'
            overflow='unset'
            className='absolute bottom-0 left-0'
          />
        ) : (
          ''
        )}
      </div>
      {!first ? (
        <CardBorder url={url} pos={pos} size='w-[400px] h-[324px]' />
      ) : (
        ''
      )}
    </div>
  )
}

export default ArticleAbout
