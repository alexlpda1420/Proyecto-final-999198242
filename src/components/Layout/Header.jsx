
import { Link } from "react-router-dom"
import { useAuth } from "../../context/UserContext"
const Header = () => {

  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }
  
  return (
  
    <header>
      <img src="https://images.seeklogo.com/logo-png/43/2/escudo-river-plate-2022-logo-png_seeklogo-435015.png" alt="Imagen-Logo" />
      <nav>
        <ul>     
          
          {
            user &&
            <>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Dashboard">Dashboard</Link></li>
              <li><Link to="/AboutUs">Sobre Nosotros</Link></li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          }
          {
            !user && <>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Registrate</Link></li>
            </>
          }
         
        </ul>
      </nav>
    </header>
)
}

export {Header}