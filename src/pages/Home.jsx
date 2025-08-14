import { useEffect, useMemo, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { useAuth } from "../context/UserContext";
import { FaSearch } from 'react-icons/fa';
import logo from "../assets/images/Virtua-Tienda.webp"


const Home = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");
  const [errors, setErrors] = useState({});

  const { user } = useAuth();
  const [find, setFind] = useState("");

  const fetchingProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    fetchingProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const q = find.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => p.title.toLowerCase().includes(q));
  }, [products, find]);

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  const handleOpenEdit = (product) => {
    setShowPopup(true);
    setProductToEdit(product);
    setTitleEdit(product.title);
    setPriceEdit(product.price);
    setDescriptionEdit(product.description);
    setCategoryEdit(product.category);
    setImageEdit(product.image);
    setErrors({});
  };

  const validateEditForm = () => {
    const newErrors = {};
    if (!titleEdit.trim()) newErrors.title = "El título es obligatorio.";
    if (!priceEdit || Number(priceEdit) <= 0)
      newErrors.price = "El precio debe ser mayor a 0.";
    if (!descriptionEdit.trim())
      newErrors.description = "La descripción es obligatoria.";
    if (!categoryEdit.trim())
      newErrors.category = "La categoría es obligatoria.";
    if (!imageEdit.trim() || !/^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i.test(imageEdit))
      newErrors.image = "Debe ser una URL de imagen válida.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateEditForm()) return;

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit,
    };

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productToEdit.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProducts((prev) =>
          prev.map((p) => (p.id === productToEdit.id ? data : p))
        );
        setShowPopup(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        {/* Sección bienvenida */}
        <section className="container my-4 text-center">
          <h1 className="mb-3">Bienvenido a Virtua-Tienda</h1>
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
          <p className="text-muted">
            Descubrí una selección exclusiva de productos para vos. Calidad,
            confianza y atención personalizada.
          </p>
        </section>

        {/* Beneficios */}
        <section className="container mb-5">
          <div className="row text-center">
            <div className="col-md-4">
              <h3>🚚 Envíos a todo el país</h3>
              <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
            </div>
            <div className="col-md-4">
              <h3>💳 Pagos seguros</h3>
              <p >Trabajamos con plataformas que garantizan tu seguridad.</p>
            </div>
            <div className="col-md-4">
              <h3>📞 Atención personalizada</h3>
              <p>Estamos disponibles para ayudarte en todo momento.</p>
            </div>
          </div>
        </section>
        <h2 className="text-center mb-4">Nuestros productos</h2> 
        <p className="text-center mb-4">Elegí entre nuestras categorías más populares.</p>
        {/* Buscador */}
<section className="container mb-4 d-flex justify-content-center">
      <div className="input-group w-75">
        <input
          className="form-control"
          type="search"
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
          value={find}
          onChange={(e) => setFind(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="button">
          <FaSearch />
        </button>
      </div>
    </section>

        {/* Lista de productos */}
        <section className="container my-4">
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={product.id}
              >
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      padding: "10px",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-truncate">
                      {product.description}
                    </p>
                    <p className="fw-bold">${product.price}</p>
                    <p className="text-muted">{product.category}</p>
                    {user && (
                      <div className="mt-auto">
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => handleOpenEdit(product)}
                        >
                          Actualizar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          Borrar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

 {/* Modal edición con validación */}
      {showPopup && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleUpdate} noValidate>
                <div className="modal-header">
                  <h5 className="modal-title">Editar producto</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowPopup(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    className={`form-control mb-2 ${
                      errors.title ? "is-invalid" : ""
                    }custom-placeholder` }
                    type="text"
                    placeholder="Título"
                    value={titleEdit}
                    onChange={(e) => setTitleEdit(e.target.value)}
                  />
                  {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
                  )}

                  <input
                    className={`form-control mb-2 ${
                      errors.price ? "is-invalid" : ""
                    } custom-placeholder`}
                    type="number"
                    placeholder="Precio"
                    value={priceEdit}
                    onChange={(e) => setPriceEdit(e.target.value)}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}

                  <textarea
                    className={`form-control mb-2 ${
                      errors.description ? "is-invalid" : ""
                    } custom-placeholder`}
                    placeholder="Descripción"
                    value={descriptionEdit}
                    onChange={(e) => setDescriptionEdit(e.target.value)}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}

                  <input
                    className={`form-control mb-2 ${
                      errors.category ? "is-invalid" : ""
                    } custom-placeholder`}
                    type="text"
                    placeholder="Categoría"
                    value={categoryEdit}
                    onChange={(e) => setCategoryEdit(e.target.value)}
                  />
                  {errors.category && (
                    <div className="invalid-feedback">{errors.category}</div>
                  )}

                  <input
                    className={`form-control ${
                      errors.image ? "is-invalid" : ""
                    } custom-placeholder`}
                    type="text"
                    placeholder="URL de la imagen"
                    value={imageEdit}
                    onChange={(e) => setImageEdit(e.target.value)}
                  />
                  {errors.image && (
                    <div className="invalid-feedback">{errors.image}</div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      </Layout>
    </>
  );
};

export { Home };
