import './Home.css'
import video from '../../video/Ffarm Taid.mp4'

const Home = ()=>{
  return(
    <video autoPlay muted loop>
        <source src={video} />
    </video>
  )
}

export default Home