import CardBorder from './CardBorder'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ArticleAbout = ({ subtitle, url, first, children, pos, last }) => {
  return (
    <div
      className={`md:flex md:flex-row xs:px-5 sm:px-40 md:gap-10 sm:py-5 xs:mb-10 relative ${
        first ? 'xs:flex xs:flex-col-reverse' : ''
      }`}
    >
      {first
        ? (
          <CardBorder
            url={url}
            pos={pos}
            size='md:w-[400px] md:h-[324px]'
            center
          />
          )
        : (
            ''
          )}
      <div className='md:w-1/2 xs:py-4 md:py-10 relative'>
        <h2 className='flex items-center gap-2 justify-start'>
          <hr className='w-4 h-1 bg-mustard' />
          <span className='text-white xs:text-h3'>{subtitle}</span>
        </h2>
        <p className='text-white xs:text-h4 md:text-h3 xs:mt-5 md:mt-10'>
          {children}
        </p>
      </div>
      {!first
        ? (
          <CardBorder
            url={url}
            pos={pos}
            size='xs:w-[160px] xs:h-[100px] md:w-[400px] md:h-[324px]'
          />
          )
        : (
            ''
          )}
      {last
        ? (
          <BsFillArrowUpCircleFill
            fill='transparent'
            stroke='#F8B525'
            strokeWidth='1'
            overflow='unset'
            className='md:absolute md:bottom-0 md:left-40 xs:mt-10 xs:mx-auto xs:text-[25px] sm:text-[35px]'
          />
          )
        : (
            ''
          )}
    </div>
  )
}

export default ArticleAbout
