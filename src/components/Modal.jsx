import { useRef, useState } from 'react'
import useModal from '../hooks/useModal'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({
  closeModal,
  message,
  sendMessage,
  placeHolder1,
  placeHolder2,
  type1 = 'text',
  type2 = 'text',
}) => {
  const [form, setForm] = useState({ name: '', number: '', comment: '' })
  const [modal, setModal] = useModal()
  const input1 = useRef(null)
  const input2 = useRef(null)
  const verify = new Map(Object.entries(form))

  const closeModalOw = e => {
    if (e.target.id === 'containerModal') closeModal()
  }

  const send = e => {
    e.preventDefault()
    if (
      verify.get(placeHolder1.toLowerCase()) === '' ||
      verify.get(placeHolder2.toLowerCase()) === ''
    ) {
      if (!verify.get(placeHolder1.toLowerCase()).length) {
        input1.current.style.borderBottom = '#ff0000 solid 1px'
      }

      if (!verify.get(placeHolder2.toLowerCase()).length) {
        input2.current.style.borderBottom = '#ff0000 solid 1px'
      }

      return
    }
    setModal(!modal)
  }

  const updateInput = e => {
    setForm(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div
      className='fixed z-100 top-0 left-0 h-screen w-full bg-blackOpacity'
      id='containerModal'
      onClick={closeModalOw}
    >
      <div
        className={`xs:w-4/5 xs:h-1/2 sm:w-2/5 sm:h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative rounded-2xl xs:border xs:border-mustard md:border-0 md:before:content-[""] md:before:border md:before:border-mustard md:before:border-solid md:before:w-full md:before:h-full md:before:absolute md:before:rounded-2xl md:before:-bottom-5 md:before:-right-5`}
      >
        <div className='w-full h-full rounded-2xl bg-night text-center text-white pt-7 relative'>
          <div className='w-3/5 mx-auto h-full justify-around flex-col flex relative'>
            <div className='flex flex-col'>
              <h3 className='text-white text-center xs:text-h4 sm:text-h3'>
                {message}
              </h3>
            </div>
            <div className='flex flex-col w-full gap-8'>
              <input
                type={type1}
                name={placeHolder1.toLowerCase()}
                autoComplete='off'
                className='input-dp'
                placeholder={placeHolder1}
                value={verify.get(placeHolder1.toLowerCase())}
                onChange={updateInput}
                ref={input1}
              />
              <input
                type={type2}
                name={placeHolder2.toLowerCase()}
                autoComplete='off'
                className='input-dp'
                placeholder={placeHolder2}
                value={verify.get(placeHolder2.toLowerCase())}
                onChange={updateInput}
                ref={input2}
              />
            </div>
            <a
              href='#'
              className='xs:mt-5 sm:mt-0 buttom inline-flex md:w-full xs:w-4/5 xs:mx-auto md:mx-0 h-10 justify-center items-center xs:text-h4'
              onClick={send}
            >
              Send
            </a>
          </div>
        </div>
        {modal ? (
          <div className='w-full h-full rounded-2xl bg-night grid place-content-center absolute top-0 left-0 text-white'>
            <h3 className='w-3/5 text-center mx-auto'>{sendMessage}</h3>
            <AiOutlineClose
              className='absolute top-5 right-5 cursor-pointer'
              fontSize='20'
              fill='#F8B525'
              onClick={closeModal}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Modal
