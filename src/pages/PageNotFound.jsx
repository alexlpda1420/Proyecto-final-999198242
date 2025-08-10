import { Layout } from "../components/Layout/Layout"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <Layout>
        <div>
          <h1>🛍️ ¡Uy! Página no encontrada (404)</h1>
          <p >
            Parece que esta página se ha perdido entre nuestros productos.
          </p>
          <p >
            Puede que el enlace esté roto o que el producto ya no exista.
          </p>

          <Link to="/">Ir a inicio</Link>
        </div>
      </Layout>


    </>

  )
}

export { PageNotFound }