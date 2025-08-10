import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  const [user, setUser] = useState(true)
  return (
  
    <header>
      <img src="https://images.seeklogo.com/logo-png/43/2/escudo-river-plate-2022-logo-png_seeklogo-435015.png" alt="Imagen-Logo" />
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/AboutUs">Sobre Nosotros</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Registro</Link></li>
          <button>Cerrar Sesión</button>
          {
            user &&  <li><Link to="/admin">Admin</Link></li>
          }
         
        </ul>
      </nav>
    </header>
)
}

export {Header}