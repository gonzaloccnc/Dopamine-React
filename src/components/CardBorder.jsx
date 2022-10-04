import { direction } from '../helpers/decoration'

const CardBorder = ({ url, size, pos = 'topLeft', center }) => {
  const border = direction.get(pos)

  return (
    <div
      className={`${size} xs:w-[160px] xs:h-[100px] xs:mx-auto xs:mt-5 sm:w-[300px] sm:h-[170px] relative rounded-2xl before:content-[""] before:border before:border-mustard before:border-solid before:w-full before:h-full before:absolute before:rounded-2xl ${border}`}
    >
      <div
        className={`w-full h-full absolute rounded-2xl ${
          center ? 'bg-center' : ''
        }`}
        style={{ backgroundSize: 'cover', backgroundImage: `url(${url})` }}
      ></div>
    </div>
  )
}

export default CardBorder
