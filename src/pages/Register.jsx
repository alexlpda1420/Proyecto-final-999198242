import { Layout } from "../components/Layout/Layout"

const Register = () => {
  return (
    <Layout>
      <h1>Hola desde register</h1>
      <h1>Registrate</h1>

      <section>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" />
          </div>
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

export { Register }