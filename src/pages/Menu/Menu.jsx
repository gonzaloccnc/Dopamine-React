import { useState } from 'react'
import AllMenu from './AllMenu'
import MenuDefault from './MenuDefault'

const Menu = () => {
  const [allMenu, setAllMenu] = useState(false)

  useState(() => {

    if(window.innerWidth < 768){
      setAllMenu(!allMenu)
    }
  }, [])

  return (
    <main className='w-full md:py-16 md:static md:translate-y-0 md:translate-x-0 xs:py-12 xs:absolute
    xs:top-1/2 xs:left-1/2 xs:-translate-x-1/2 xs:-translate-y-1/2'>
      {allMenu ? <AllMenu /> : <MenuDefault state={allMenu} set={setAllMenu} />}
    </main>
  )
}

export default Menu
