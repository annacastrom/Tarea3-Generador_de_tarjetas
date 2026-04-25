import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Tarjetas from './components/Tarjetas'

function App() {
  const [nombre, setNombre] = useState('');
  const [lenguaje, setLenguaje] = useState('');
  const [rolProfesional, setRolProfesional] = useState('');
  const [mostrar, setMostrar] = useState(false);

  function generarTarjeta() {
    if (nombre.trim() === '' || lenguaje.trim() === '' || rolProfesional.trim() === '') {
      return;
    }

    setMostrar(true);
  }

  function limpiarTarjeta() {
    setNombre('');
    setLenguaje('');
    setMostrar(false);
    setRolProfesional('');
    setMostrar(false);
  }

  return (
    <div>
      <h1>Generador de Tarjetas App</h1>
      <Formulario
        nombre={nombre}
        lenguaje={lenguaje}
        rolProfesional={rolProfesional}
        setNombre={setNombre}
        setLenguaje={setLenguaje}
        setRolProfesional={setRolProfesional}
        generarTarjeta={generarTarjeta}      
      />

      {mostrar && (<Tarjetas nombre={nombre} lenguaje={lenguaje} rolProfesional={rolProfesional} limpiarTarjeta={limpiarTarjeta}/>)}

    </div>
  );
}

export default App;