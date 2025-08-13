import { useState } from "react"
import { Layout } from "../components/Layout/Layout"
import placeholderImg from "../assets/images/placerholderimage.webp"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [product, setProduct] = useState(null)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState("")

  const validateForm = () => {
    let newErrors = {}

    if (!name.trim()) newErrors.name = "El nombre del producto es obligatorio"
    else if (name.length < 4) newErrors.name = "El nombre debe tener al menos 4 caracteres"

    if (!price) newErrors.price = "El precio es obligatorio"
    else if (isNaN(price) || price <= 0) newErrors.price = "El precio debe ser un número mayor a 0"

    if (!description.trim()) newErrors.description = "La descripción es obligatoria"
    else if (description.length < 10) newErrors.description = "La descripción debe tener al menos 10 caracteres"

    if (!category.trim()) newErrors.category = "La categoría es obligatoria"
    if (!image.trim()) newErrors.image = "La URL de la imagen es obligatoria"

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
      category,
      image
    }

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProduct(data)
        setSuccess("Producto agregado con éxito.")
        setTimeout(() => setSuccess(""), 3000) // desaparece después de 3 segundos

        // Limpiar campos
        setName("")
        setPrice("")
        setDescription("")
        setCategory("")
        setImage("")
      } else {
        setErrors({ general: "No se pudo agregar el producto. Intenta nuevamente." })
      }
    } catch (error) {
      setErrors({ general: "Ocurrió un error al agregar el producto." })
    }
  }

  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Panel de Administración</h1>

        <div className="row g-4">
          {/* Formulario */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h4 className="mb-4 text-center">Cargar nuevo producto</h4>

                {/* Mensajes de éxito y error */}
                {success && <div className="alert alert-success text-center">{success}</div>}
                {errors.general && <div className="alert alert-danger text-center">{errors.general}</div>}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Nombre del producto:</label>
                    <input
                      placeholder="Mínimo 4 caracteres"
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Precio:</label>
                    <input
                      placeholder="Debe ser numérico"
                      type="number"
                      className={`form-control ${errors.price ? "is-invalid" : ""}`}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Categoría:</label>
                    <input
                      placeholder="Ej: Ropa, Electrónica..."
                      type="text"
                      className={`form-control ${errors.category ? "is-invalid" : ""}`}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Descripción:</label>
                    <textarea
                      placeholder="Mínimo 10 caracteres"
                      className={`form-control ${errors.description ? "is-invalid" : ""}`}
                      rows="4"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">URL de la imagen:</label>
                    <input
                      placeholder="https://ejemplo.com/imagen.jpg"
                      type="url"
                      className={`form-control ${errors.image ? "is-invalid" : ""}`}
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Guardar Producto
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Vista previa */}
          <div className="col-lg-6">
            <h3 className="mb-3 fw-semibold text-center">Vista previa</h3>
            <div className="d-flex justify-content-center">
              <div
                className="card shadow-sm"
                style={{ width: "100%", maxWidth: "350px", borderRadius: "12px", overflow: "hidden" }}
              >
                <img
                  src={image || placeholderImg}
                  alt="Vista previa del producto"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{name || "Nombre del producto"}</h5>
                  <p className="text-muted mb-1">
                    Categoría: <strong>{category || "Sin categoría"}</strong>
                  </p>
                  <p className="card-text">{description || "Descripción del producto..."}</p>
                  <h4 className="text-primary fw-bold">{price ? `$${price}` : "$0.00"}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { Dashboard }
