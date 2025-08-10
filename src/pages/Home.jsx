
import { Layout } from "../components/Layout/Layout"
import {useEffect, useState } from "react"
const Home = () => {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(true)
  

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => { 
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id != id))
    }




  }


  return (
    <>
      <Layout>
         <section>
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
        </section>
        
        <section>
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li>
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          <li>
            <h3>Atención personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento.</p>
          </li>
        </ul>
        </section>
        
         <section>
        <h2>Nuestros productos</h2>
          <p>Elegí entre nuestras categorías más populares.</p>
          <div>
            { 
              products.map((product) => <div key={product.id}>
                <h2 key={product.id}>{product.title}</h2>
                <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p><strong>{product.category}</strong></p>
                {
                  user &&  <div>
                  <button>Actualizar</button>
                    <button onClick={() => handleDelete(product.id) }>Borrar</button>
                </div>
                
               }
                
              </div>)
            }
          </div>
     
          </section>
      </Layout>

    </>
  )
}

export { Home }
