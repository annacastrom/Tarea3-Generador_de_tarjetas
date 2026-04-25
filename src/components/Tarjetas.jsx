import React from 'react'
import './Tarjetas.css'

function Tarjetas({nombre, lenguaje, rolProfesional, limpiarTarjeta}) {

    const inciales = nombre.split(' ').map(p => p[0]).join('').toUpperCase();

  return (
    <div className='tarjeta-contenedor'>
        
        <div className='tarjeta-info'>
            <div className='tarjeta-avatar'>
                {inciales}
            </div>
            <p className='tarjeta-nombre'>{nombre}</p>
            <p className='tarjeta-lenguaje-text'>Lenguaje favorito: <span className='tarjeta-lenguaje'>{lenguaje}</span>
            </p>
            <hr className='tarjeta-divisor'/>
            <p className='tarjeta-rol'>{rolProfesional}</p>
        </div>

        <button className='tarjeta-boton-limpiar' onClick={limpiarTarjeta}>
            Limpiar
        </button>
    </div>
  )
}

export default Tarjetas