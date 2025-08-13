import { useState } from "react"
import { Layout } from "../components/Layout/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState("")
  const { register } = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}

    if (!username.trim()) {
      newErrors.username = "El nombre de usuario es obligatorio."
    } else if (username.length < 3) {
      newErrors.username = "Debe tener al menos 3 caracteres."
    }

    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Formato de correo inválido."
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria."
    } else if (password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess("")
    if (!validateForm()) return

    const isRegistered = await register(username, email, password)

    if (isRegistered) {
      setSuccess("Usuario registrado con éxito.")
      setUsername("")
      setEmail("")
      setPassword("")
      setTimeout(() => navigate("/"), 1500)
    } else {
      setErrors({ general: "No se pudo registrar el usuario. Intenta nuevamente." })
    }
  }

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Registrate</h2>

                {errors.general && (
                  <div className="alert alert-danger text-center py-2">{errors.general}</div>
                )}
                {success && (
                  <div className="alert alert-success text-center py-2">{success}</div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input
                      type="text"
                      className={`form-control ${errors.username ? "is-invalid" : ""} custom-placeholder`}
                      placeholder="Tu nombre de usuario"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""} custom-placeholder`}
                      placeholder="nombre@ejemplo.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""} custom-placeholder`}
                      placeholder="********"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
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
