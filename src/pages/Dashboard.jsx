import { useState } from "react"
import { Layout } from "../components/Layout/Layout"
const Dashboard = () => {
const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [description, setDescription] = useState("")
const [product, setProduct] = useState(null)
const [error, setError] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault()
  setError(null)

  if (!name || !price || !description) {
    setError("Debes completar los campos")
    return
  }

  if (name.length < 3) {
    setError("El nombre debe tener al menos 4 caracteres")
    return
  }


  const newProduct = {
    id: crypto.randomUUID(),
    title: name,
    price: price,
    description: description,
    category: "",
    image: ""
  }

  const response = await fetch("https://fakestoreapi.com/products", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  })

  const data = await response.json()
  setProduct(data)
  setName("")
  setPrice("")
  setDescription("")
}




  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Panel de Administración</h1>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h4 className="mb-4 text-center">Cargar nuevo producto</h4>

                {error && (
                  <div className="alert alert-danger text-center py-2">{error}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nombre del producto:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Precio:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Descripción:</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="4"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Guardar Producto
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {product && (
              <div className="card mt-4 shadow-sm border-0">
                <div className="card-body">
                  <h5>{product.title}</h5>
                  <p className="text-muted">${product.price}</p>
                  <p>{product.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Dashboard }