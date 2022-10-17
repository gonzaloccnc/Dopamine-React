import Modal from '../components/Modal'
import useModal from '../hooks/useModal'
import mainIMG from '../../assets/strawberries.jpg'

const Home = () => {
  const [modal, openModal] = useModal()
  const modalO = e => {
    e.preventDefault()
    openModal(!modal)
  }
  console.log(mainIMG)
  return (
    <main className='flex'>
      <div className='w-2/5 h-screen bg-night pt-[150px] pl-10 md:flex flex-col justify-around xs:hidden'>
        <h2 className='text-white w-3/4'>
          Food from our restaurant drives up not only dopamine in your brain,
          <br />
          but also a beauty in your body.
        </h2>
        <div>
          <a href='#reserve' className='buttom' onClick={modalO}>
            Reserve a Table
          </a>
        </div>
      </div>
      <div
        className={`xs:w-full md:w-3/5 h-screen bg-no-repeat bg-cover`}
        style={{backgroundImage: `url(${mainIMG})`}}
        id='bg-wave'
      >
        <div className='md:hidden sm:block'>
          <a
            href='#reserve'
            className='buttom absolute bottom-16 left-1/2 -translate-x-1/2 xs:text-h4 sm:text-h3'
            onClick={modalO}
          >
            Reserve a Table
          </a>
        </div>
      </div>
      {modal ? (
        <Modal
          closeModal={openModal}
          message='Please leave your contact number and we will call you back.'
          sendMessage='Thank you! We will call you in a minute'
          placeHolder1='Name'
          placeHolder2='Number'
          type2='number'
        />
      ) : null}
    </main>
  )
}

export default Home
