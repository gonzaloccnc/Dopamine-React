import Modal from '../components/Modal'
import useModal from '../hooks/useModal'

const Home = () => {
  const [modal, openModal] = useModal()
  const modalO = e => {
    e.preventDefault()
    openModal(!modal)
  }

  return (
    <main className='flex'>
      <div className='w-2/5 h-screen bg-night pt-[150px] pl-10 flex flex-col justify-around'>
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
        className='w-3/5 h-screen bg-[url(.\..\images\strawberries.jpg)] bg-no-repeat bg-cover'
        id='bg-wave'
      ></div>
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
