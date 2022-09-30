import IconHOC from '../helpers/IconHOC'
import TitleDecorate from '../components/TitleDecorate'
import CardBorder from '../components/CardBorder'
import person from '../../images/person.jpg'
import { AiFillStar } from 'react-icons/ai'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

const Feedbacks = () => {
  return (
    <main className='py-16'>
      <TitleDecorate title='Feedbacks' />
      <div className='flex flex-wrap w-[850px] mx-auto gap-20'>
        <div
          id='slider'
          className='flex gap-10 justify-center items-center w-full'
        >
          {IconHOC(BsFillArrowLeftCircleFill)}
          <div className='flex justify-around min-w-[400px] w-full'>
            <CardBorder
              url={person}
              pos='bottomRight'
              size='w-[250px] h-[250px]'
            />
            <div className='text-white w-1/2 relative'>
              <h2>Martha</h2>
              <p className='mt-5'>
                Do yourself a favor and visit this lovely restaurant! The
                service is unmatched. The staff truly cares about your
                experience. The food is absolutely amazing - everything we
                tasted melted in other mouths. Absolutely the best meal we had
                whil. Highly recommend!
              </p>
              <div className='flex absolute bottom-0 left-0'>
                <AiFillStar fill='#FFD160' fontSize='25' />
                <AiFillStar fill='#FFD160' fontSize='25' />
                <AiFillStar fill='#FFD160' fontSize='25' />
                <AiFillStar fill='#FFD160' fontSize='25' />
                <AiFillStar fill='#FFD160' fontSize='25' />
              </div>
            </div>
          </div>
          {IconHOC(BsFillArrowRightCircleFill)}
        </div>
        <a href='#' className='buttom'>
          Leave a Comment
        </a>
      </div>
    </main>
  )
}

export default Feedbacks
