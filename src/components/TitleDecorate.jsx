const TitleDecorate = ({ title }) => {
  return (
    <div className='md:py-16 xs:py-4'>
      <h2 className='flex items-center gap-2 justify-center'>
        <hr className='w-4 h-1 bg-mustard' />
        <span className='text-white xs:text-h3 sm:text-h2'>{title}</span>
        <hr className='w-4 h-1 bg-mustard' />
      </h2>
    </div>
  )
}

export default TitleDecorate
