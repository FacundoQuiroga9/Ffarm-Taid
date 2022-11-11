import './App.css'
import Navbar from './components/Navbar/Navbar'
import video from './video/Ffarm Taid.mp4'

function App() {

  return (
    <div className="App">
      <Navbar />
      <video autoPlay muted loop>
        <source src={video} />
      </video>
    </div>
  )
}

export default App
