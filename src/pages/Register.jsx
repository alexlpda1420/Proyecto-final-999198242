import { use, useState } from "react"
import { Layout } from "../components/Layout/Layout"
import { useAuth } from "../context/UserContext"
import {useNavigate} from "react-router-dom"


const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { register } = useAuth()
  const navigate = useNavigate()
  
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }
  
    const newUser = {
      username,
      email,
      password
    }
    const response = await register(username,email,password)
    navigate("/")

    console.log(newUser)
    setSuccess("Usuario registrado")

    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Registrate</h2>

                {error && (
                  <div className="alert alert-danger text-center py-2">{error}</div>
                )}
                {success && (
                  <div className="alert alert-success text-center py-2">{success}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tu nombre de usuario"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="nombre@ejemplo.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="********"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Registrarme
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

export { Register }