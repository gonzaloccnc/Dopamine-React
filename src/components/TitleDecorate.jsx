const TitleDecorate = ({ title }) => {
  return (
    <div className='py-20'>
      <h2 className='flex items-center gap-2 justify-center'>
        <hr className='w-4 h-1 bg-mustard' />
        <span className='text-white'>{title}</span>
        <hr className='w-4 h-1 bg-mustard' />
      </h2>
    </div>
  )
}

export default TitleDecorate
