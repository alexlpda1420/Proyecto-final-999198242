import { useState } from "react"
import { Layout } from "../components/Layout/Layout"
import { useAuth } from "../context/UserContext"
import {useNavigate} from "react-router-dom"

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const isLogin = await login(username, password)
    if (isLogin) {
      setUsername("")
    setPassword("")
    navigate("/")
    } 
  }
  
  return (
    <Layout>
      <h1>Inicia sesión</h1>

      <section>
        <form onSubmit={handleLogin}>
          <p>hopkins, William56$hj</p>
          <div>
            <label>Nombre de Usuario:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}value={username}/>
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }