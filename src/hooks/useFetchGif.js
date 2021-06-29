import { useEffect, useState } from "react"

import { getGifs } from './../helpers/getGifs';


export const useFetchGif = ( category ) => {
  const [ state , setState ] = useState({
    data:[],
    loading: true
  })

  /* 
  Se utiliza para evitar que se vuelva a enviar la solicitud http
  cuando se vuelve a renderizar un componente
  */
  useEffect( () => {
    getGifs( category )
      .then( img => {
        setTimeout(() => {
          setState({ 
            data: img,
            loading: false
           })
        }, 3000);
      } ); 
  } , [ category ] )

  return state; 
}
