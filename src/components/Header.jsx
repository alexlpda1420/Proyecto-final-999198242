import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  const [user, setUser] = useState(true)
  return (
  
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Register">Registro</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          {
            user &&  <li><Link to="/admin">Admin</Link></li>
          }
         
        </ul>
      </nav>
    </header>
)
}

export {Header}