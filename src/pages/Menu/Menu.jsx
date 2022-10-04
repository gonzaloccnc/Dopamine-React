import { useState } from 'react'
import AllMenu from './AllMenu'
import MenuDefault from './MenuDefault'

const Menu = () => {
  const [allMenu, setAllMenu] = useState(false)

  return (
    <main className='w-full py-16'>
      {allMenu ? <AllMenu /> : <MenuDefault state={allMenu} set={setAllMenu} />}
    </main>
  )
}

export default Menu
