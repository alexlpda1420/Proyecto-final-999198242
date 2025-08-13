import { useState } from "react"
import { Layout } from "../components/Layout/Layout"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let newErrors = {}

    if (!name.trim()) {
      newErrors.name = "El nombre del producto es obligatorio"
    } else if (name.length < 4) {
      newErrors.name = "El nombre debe tener al menos 4 caracteres"
    }

    if (!price) {
      newErrors.price = "El precio es obligatorio"
    } else if (isNaN(price) || price <= 0) {
      newErrors.price = "El precio debe ser un número mayor a 0"
    }

    if (!description.trim()) {
      newErrors.description = "La descripción es obligatoria"
    } else if (description.length < 10) {
      newErrors.description = "La descripción debe tener al menos 10 caracteres"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setErrors({})

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: parseFloat(price),
      description,
      category: "",
      image: ""
    }

    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Nombre del producto:</label>
                    <input
                      placeholder="El producto debe tener 4 caracteres"
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : "" } custom-placeholder`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Precio:</label>
                    <input
                    placeholder="El precio debe ser numérico"
                      type="number"
                      className={`form-control ${errors.price ? "is-invalid" : ""} custom-placeholder`}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Descripción:</label>
                    <textarea
                    placeholder="La descripción debe al menos tener 10 caracteres"
                      className={`form-control ${errors.description ? "is-invalid" : ""} custom-placeholder`}
                      rows="4"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
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
