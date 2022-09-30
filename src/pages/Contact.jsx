import React from 'react'
import SubtitleDecorate from '../components/SubtitleDecorate'
import TitleDecorate from '../components/TitleDecorate'
import map from '../../images/map.jpg'
import CardBorder from '../components/CardBorder'

const Contact = () => {
  return (
    <main className='py-16'>
      <TitleDecorate title='Contact us' />
      <div className='flex justify-around'>
        <div className='w-80 flex flex-col gap-16'>
          <div>
            <SubtitleDecorate title='Address' />
            <p className='text-white mt-5'>
              24 Dovercroft Pl SE, Calgary, Canada
            </p>
          </div>
          <div>
            <SubtitleDecorate title='Number' />
            <p className='text-white mt-5'>+1 231 - 201 - 1108</p>
          </div>
          <div>
            <SubtitleDecorate title='Schedule' />
            <p className='text-white mt-5'>
              Mon. - Fri.:8 a.m - 8 p.m.
              <br />
              Sat. Sun.:9 a.m - 7 p.m.
            </p>
          </div>
          <div>
            <a href='#' className='buttom'>
              Reserve a Table
            </a>
          </div>
        </div>
        <CardBorder url={map} size='w-[500px] h-[500px]' pos='bottomRight' />
      </div>
    </main>
  )
}

export default Contact
