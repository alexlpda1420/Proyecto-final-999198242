import { useState } from "react"
import { Layout } from "../components/Layout/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [loginError, setLoginError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}

    if (!username.trim()) {
      newErrors.username = "El nombre de usuario es obligatorio."
    } else if (username.length < 3) {
      newErrors.username = "Debe tener al menos 3 caracteres."
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria."
    } else if (password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError("") // Limpiar errores previos

    if (!validateForm()) return

    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      navigate("/")
    } else {
      setLoginError("Usuario o contraseña incorrectos. Por favor, verifica tus datos.")
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
                  <h6>Credenciales de prueba:</h6>
                  Usuario: hopkins <br /> Contraseña: William56$hj
                </div>

                {loginError && (
                  <div className="alert alert-danger py-2">{loginError}</div>
                )}

                <form onSubmit={handleLogin} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Nombre de Usuario:</label>
                    <input
                    placeholder="El nombre debe contener 3 caracteres"
                      type="text"
                      className={`form-control ${errors.username ? "is-invalid" : ""} custom-placeholder`}
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                    placeholder="La contraseña debe contener 6 caracteres"
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""} custom-placeholder`}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
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
