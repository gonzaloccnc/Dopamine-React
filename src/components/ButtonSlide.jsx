const ButtonSlide = ({ fn, id, activeFirst }) => {
  return (
    <span
      className={`item-slide text-gray w-9 h-9 grid place-content-center rounded-full 
      cursor-pointer ${activeFirst ? 'active' : ''}`}
      id={id}
      onClick={fn}
    >
      {id}
    </span>
  )
}

export default ButtonSlide
