import { direction } from '../helpers/decoration'

const CardBorder = ({ url, size, pos = 'topLeft' }) => {
  const border = direction.get(pos)

  return (
    <div
      className={`${size} relative rounded-2xl before:content-[""] before:border before:border-mustard before:border-solid before:w-full before:h-full before:absolute before:rounded-2xl ${border}`}
    >
      <div
        className='w-full h-full absolute rounded-2xl'
        style={{ backgroundSize: 'cover', backgroundImage: `url(${url})` }}
      ></div>
    </div>
  )
}

export default CardBorder
