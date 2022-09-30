import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Feedbacks from './pages/Feedbacks'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/feedbacks' element={<Feedbacks />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
