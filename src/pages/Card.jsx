import { Layout } from "../components/Layout/Layout"
import logo from "../assets/images/proximamente.webp"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const Card = () => {
   const navigate = useNavigate()
  return (
     <>
      <Layout>
        
      <div className="container text-center mt-5">
        <div className="card shadow-sm border-0 p-4">
            <div className="card-body">
              <h1 className="text-center mb-4">🛒 Tu carrito de compras</h1>
            <img
            src={logo}
            alt="Nuestra Tienda"
            className="mx-auto mb-4"
            style={{
              maxWidth: "300px",
              width: "100%",
              borderRadius: "15px",
              border: "3px solid #007bff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
            <div className="container mt-5">
        
                <p className="text-center">Aquí aparecerán los productos que agregues.</p>

                       <Button
                variant="primary"
                className="mt-3"
                onClick={() => navigate("/")}
              >
                Volver al inicio
              </Button>
                
      </div>
          </div>
        </div>
      </div>
    </Layout>


    </>

  )
}

export { Card }

