import { Layout } from "../components/Layout/Layout"

const Dashboard = () => {
  return (
    <Layout>
      <h1>Panel de Administracion</h1>

      <section>
        <h2>Cargar nuevo producto</h2>
        <form>
          <div>
            <label>Nombre del Producto: </label>
            <input type="text" name="name" />
          </div>

          <div>
            <label>Precio: </label>
            <input type="number" name="price" />
          </div>

          <div>
            <label>Descripcion: </label>
            <textarea name="description" rows="4"></textarea>
          </div>

          <button>Guardar Producto</button>
        </form>
      </section>
    </Layout>
  )
}

export { Dashboard }