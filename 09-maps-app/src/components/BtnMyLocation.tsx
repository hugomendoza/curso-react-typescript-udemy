import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const BtnMyLocation = () => {

  const { map, isMapReady} = useContext( MapContext );
  const { userLocation } = useContext( PlacesContext );

  const onClick = () => {
    if( !isMapReady ) throw new Error("El mapa no ha sido inicializado");
    if( !userLocation ) throw new Error("No hay ubicación de usuario");

    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
  }

  return (
    <button
      className="btn btn-primary"
      onClick={ onClick }
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 100
      }}
    >
      Mi Ubicación
    </button>
  )
}
