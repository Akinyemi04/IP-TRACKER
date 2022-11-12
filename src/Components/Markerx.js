import React, { useMemo } from 'react'
import {useMap,Marker,Popup} from "react-leaflet"
import Icon from './Icon'
import { useEffect } from 'react'
const Markerx = (props) => {
    const position =useMemo(()=>{
      return [props.data.location.lat,props.data.location.lng]
    },[props.data.location.lat,props.data.location.lng])
    const map = useMap()

    useEffect(()=>{
        map.flyTo(position,13,{
          animate:true,
  
        })
      },[map,position])
  return (
    
    <Marker icon={Icon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )
}

export default Markerx