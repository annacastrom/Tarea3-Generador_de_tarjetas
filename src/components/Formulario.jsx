import React from 'react'
import './Formulario.css'

function Formulario({nombre, lenguaje, rolProfesional, setNombre, setLenguaje, setRolProfesional, generarTarjeta}) {
  return (
    <div className='formulario-contenedor'>
        <h2 className='formulario-titulo'>Generador de Tarjeta</h2>

        <input
            type="text" 
            value={nombre} 
            placeholder="Tu nombre" 
            onChange={(e) => setNombre(e.target.value)}
        />

        <input
            type="text" 
            value={lenguaje} 
            placeholder="Tu lenguaje favorito" 
            onChange={(e) => setLenguaje(e.target.value)}
        />

        <input
            type="text" 
            value={rolProfesional} 
            placeholder="Tu rol profesional" 
            onChange={(e) => setRolProfesional(e.target.value)}
        />

        <button 
            className='formulario-boton-generar-tarjeta' 
            onClick={generarTarjeta}> 
            Generar tarjeta
        </button>
    </div>
  )
}

export default Formulario