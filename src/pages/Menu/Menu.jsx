import { useState } from 'react'
import AllMenu from './AllMenu'
import MenuDefault from './MenuDefault'

const Menu = () => {
  const [allMenu, setAllMenu] = useState(false)

  useState(() => {
    if (window.innerWidth < 768) {
      setAllMenu(!allMenu)
    }
  }, [])

  return (
    <main className='w-full md:py-16 xs:grid xs:place-content-center xs:h-screen lg:h-auto lg:block'>
      {allMenu ? <AllMenu /> : <MenuDefault state={allMenu} set={setAllMenu} />}
    </main>
  )
}

export default Menu
