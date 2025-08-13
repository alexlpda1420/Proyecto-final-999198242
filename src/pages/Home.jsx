import { Layout } from "../components/Layout/Layout";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/UserContext";
import logo from "../assets/images/Virtua-Tienda.webp"
const Home = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [showPopup, setShowPopup] = useState(null);
  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");
  const { user } = useAuth();
  const [find, setFind] = useState("");

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setProducts(data);
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
      setProducts((prevProduct) =>
        prevProduct.filter((product) => product.id != id)
      );
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
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProducts((prevProduct) =>
          prevProduct.map((product) =>
            product.id === productToEdit.id ? data : product
          )
        );
      }
      setShowPopup(false);
    } catch (error) {
      console.log(error);
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
              <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
            </div>
            <div className="col-md-4">
              <h3>📞 Atención personalizada</h3>
              <p>Estamos disponibles para ayudarte en todo momento.</p>
            </div>
          </div>
        </section>

        {/* Buscador */}
        <section className="container mb-4">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar productos..."
            value={find}
            onChange={(e) => setFind(e.target.value)}
          />
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

        {/* Modal edición */}
        {showPopup && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={handleUpdate}>
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
                      className="form-control mb-2"
                      type="text"
                      placeholder="Título"
                      value={titleEdit}
                      onChange={(e) => setTitleEdit(e.target.value)}
                    />
                    <input
                      className="form-control mb-2"
                      type="number"
                      placeholder="Precio"
                      value={priceEdit}
                      onChange={(e) => setPriceEdit(e.target.value)}
                    />
                    <textarea
                      className="form-control mb-2"
                      placeholder="Descripción"
                      value={descriptionEdit}
                      onChange={(e) => setDescriptionEdit(e.target.value)}
                    ></textarea>
                    <input
                      className="form-control mb-2"
                      type="text"
                      placeholder="Categoría"
                      value={categoryEdit}
                      onChange={(e) => setCategoryEdit(e.target.value)}
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="URL de la imagen"
                      value={imageEdit}
                      onChange={(e) => setImageEdit(e.target.value)}
                    />
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
