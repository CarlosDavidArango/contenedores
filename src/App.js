import './Styles/App.css';
import { Route, Link, Routes} from 'react-router-dom'
import Inicio from './Pages/Inicio';
import Importador from './Pages/Importador';
import Naviera from './Pages/Naviera';
import Puerto from './Pages/Puerto';
import { useState } from 'react';
import img from "./Styles/logoA.jpeg"

function App() {

  const [puertos, setPuertos] = useState([])
  const [envios, setEnvios] = useState([])

  return (
    <div className="App">
        <ul className='Navbar'>
          <li className='Link'>
            <Link to="/" className='LinkLink'><img src={img} className="botonInicio"></img></Link>
          </li>
          <li className='Link'>
            <Link to="/Pages/naviera" className='LinkLink'>I am a shipping company</Link>
          </li>
          <li className='Link'>
            <Link to="/Pages/importador" className='LinkLink'>I am an import agent</Link>
          </li>
          <li className='Link'>
            <Link to="/Pages/puerto" className='LinkLink'>I am a port</Link>
          </li>
        </ul>
      <section>
      <Routes>
          <Route path='/' element = {<Inicio puertos = {puertos} envios = {envios}/>}>
          </Route>
          <Route path='/Pages/naviera' element = {<Naviera puertos = {puertos} envios = {envios} setEnvios = {setEnvios}/>}>
          </Route>
          <Route path='/Pages/importador' element= {<Importador puertos = {puertos} envios = {envios}/>}>
          </Route>
          <Route path='/Pages/puerto' element= {<Puerto puertos = {puertos} setPuertos = {setPuertos}/>}>
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
