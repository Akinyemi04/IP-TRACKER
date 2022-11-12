import "leaflet/dist/leaflet.css"
import { MapContainer,TileLayer} from "react-leaflet"
import Markerx from "./Markerx"

const Map = (props) => {
    const position = [props.data.location.lat,props.data.location.lng]
    
  return (
    <MapContainer
    style={{width:'100vw',height:'60vh',}} 
     center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Markerx data={props.data} />
  </MapContainer>
  )
}

export default Map