import './Mapa.css'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Mapa = ()=>{
  return (
    <div className="mapa">
      <MapContainer center={{lat: '-43.287797806220226', lng: '-65.26590939999608'}} zoom='13'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={{lat: '-43.287797806220226', lng: '-65.26590939999608'}} />
      </MapContainer>
    </div>
  )
}

export default Mapa