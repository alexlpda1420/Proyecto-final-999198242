import { Layout } from "../components/Layout/Layout"

const Login = () => {
  return (
    <Layout>
       <h1>Hola desde login</h1>
      <h1>Inicia sesión</h1>

      <section>
        <form>
          <div>
            <label>Correo electrónico:</label>
            <input type="email" />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }