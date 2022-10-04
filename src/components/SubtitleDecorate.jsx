import React from 'react'

const SubtitleDecorate = ({ title }) => {
  return (
    <h3 className='flex items-center gap-2'>
      <hr className='w-4 h-1 bg-mustard' />
      <span className='text-yellow xs:text-h4 sm:text-h3'>{title}</span>
    </h3>
  )
}

export default SubtitleDecorate
