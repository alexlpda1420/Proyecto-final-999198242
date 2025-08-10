import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
const PageNotFound = () => {
  return (
      <>
      <Header />
      <div>
        <h1>🛍️ ¡Uy! Página no encontrada (404)</h1>
        <p >
        Parece que esta página se ha perdido entre nuestros productos.
      </p>
      <p >
        Puede que el enlace esté roto o que el producto ya no exista.
      </p>
      </div>
      <Footer/>
      </>

  )
}

export {PageNotFound}