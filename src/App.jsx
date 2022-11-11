import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from  'react-router-dom'
import About from './paginas/About/About'
import Home from './paginas/Home/Home'
import Hosteria from './paginas/Hosteria/Hosteria'
import Restaurante from './paginas/Restaurante/Restaurante'
import Contacto from './paginas/Contacto/Contacto'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quienes-somos' element={<About/>} />
        <Route path='/hosteria' element={<Hosteria/>} />
        <Route path='/restaurante' element={<Restaurante/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
