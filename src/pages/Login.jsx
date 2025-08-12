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
      <div className="container mt-5">
        <h1 className="text-center mb-4">Inicia sesión</h1>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h4 className="mb-4 text-center">Accede a tu cuenta</h4>

                {/* Solo para referencia temporal de credenciales */}
                <div className="alert alert-info text-center py-2">
                  Usuario: hopkins <br /> Contraseña: William56$hj
                </div>

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Nombre de Usuario:</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Login }