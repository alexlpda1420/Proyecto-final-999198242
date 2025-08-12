import { Layout } from "../components/Layout/Layout"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <Layout>
      <div className="container text-center mt-5">
        <div className="card shadow-sm border-0 p-4">
          <div className="card-body">
            <h1 className="display-4 mb-3">🛍️ ¡Uy! Página no encontrada (404)</h1>
            <p className="text-muted">
              Parece que esta página se ha perdido entre nuestros productos.
            </p>
            <p className="text-muted mb-4">
              Puede que el enlace esté roto o que el producto ya no exista.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              Ir a inicio
            </Link>
          </div>
        </div>
      </div>
    </Layout>


    </>

  )
}

export { PageNotFound }