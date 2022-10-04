import { useState } from 'react'

const useModal = (inic = false) => {
  const [modal, setModal] = useState(inic)

  const openModal = () => setModal(!modal)

  return [modal, openModal]
}

export default useModal
