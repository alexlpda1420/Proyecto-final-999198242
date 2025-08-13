import { Layout } from "../components/Layout/Layout";
import logo from "../assets/images/Virtua-Tienda.webp"

const AboutUs = () => {
  return (
    <Layout>
      <section className="container my-5">
        <h1 className="mb-4 text-center">Sobre Nosotros</h1>

        {/* Sección de introducción con párrafos */}
        <div className="mb-5">
          <p>
            En Virtua Tienda nos apasiona ofrecerte la mejor experiencia de
            compra online. Desde nuestro inicio, hemos trabajado para brindarte
            productos de calidad, atención personalizada y envío rápido.
          </p>
          <p>
            Nuestro compromiso es contigo, nuestro cliente, y con la innovación
            constante para mejorar cada día.
          </p>
        </div>

        {/* Sección de valores / beneficios en tres columnas responsivas */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <h3>🎯 Nuestro Proyecto</h3>
            <p>
              Este es un proyecto de e-commerce desarrollado como parte del
              curso de React. Se trata de una tienda online completa que simula
              una experiencia real de compra con funcionalidades de
              autenticación, gestión de productos y navegación intuitiva. El
              proyecto demuestra las mejores prácticas de desarrollo frontend,
              incluyendo gestión de estado, routing, formularios validados y
              diseño responsive.
            </p>
          </div>
          <div className="col-md-4">
            <h3>👥 Nuestro Público</h3>
            <p>
              Esta aplicación está dirigida a desarrolladores y estudiantes que
              quieren aprender React y las tecnologías modernas de desarrollo
              web. También sirve como referencia para implementar
              funcionalidades comunes en aplicaciones web. Los usuarios pueden
              explorar productos, registrarse, iniciar sesión y gestionar el
              catálogo de productos, proporcionando una experiencia completa de
              e-commerce.
            </p>
          </div>
          <div className="col-md-4">
            <h3>⚡ Tecnologías y Enfoques</h3>
            <p>
              <strong>Frontend:</strong> React 19, React Router DOM, Vite <br /><br />
              <strong>Estilos:</strong> CSS moderno
              con variables, Grid y Flexbox, diseño responsive <br /><br />
              <strong>APIs:</strong>
              FakeStoreAPI para productos y autenticación <br /><br />
              <strong>Enfoques:</strong>Enfoques: Componentes
              funcionales, Hooks, Context API, formularios controlados y
              validación en tiempo real.
            </p>
          </div>
        </div>

        {/* Sección de imagen destacada */}
        <div className="text-center mb-5">
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
        </div>

        {/* Sección de historia o descripción */}
        <div>
          <h2 className="mb-3 text-center">Nuestra Historia</h2>
          <p>
            Virtua Tienda nació de la idea de crear un espacio donde la
            tecnología y la confianza se unan para ofrecer un catálogo único y
            servicios excepcionales.
          </p>
          <p>
            A lo largo de los años, hemos crecido gracias a la fidelidad de
            nuestros clientes y el esfuerzo de nuestro equipo.
          </p>
          <p>
            Seguimos comprometidos en expandir nuestro catálogo, mejorar la
            experiencia y apoyar a nuestra comunidad.
          </p>
        </div>

        {/* Características técnicas */}
        <div className="mt-5">
  <h2 className="mb-4 text-center">Características Técnicas</h2>
  <div className="container">
    <div className="row gy-4">
      
      <div className="col-12 col-md-6 col-lg-3">
        <div className="p-3 border rounded shadow-sm h-100">
          <h3>🔐 Autenticación y Seguridad</h3>
          <ul>
            <li>Sistema de login/logout con Context API.</li>
            <li>Rutas protegidas con PrivateRoute.</li>
            <li>Validación de formularios en tiempo real.</li>
            <li>Manejo de errores y feedback al usuario.</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="p-3 border rounded shadow-sm h-100">
          <h3>📱 Diseño Responsive</h3>
          <ul>
            <li>Mobile-first design (hasta 480px).</li>
            <li>Tablet optimization (hasta 880px).</li>
            <li>Desktop experience (881px+).</li>
            <li>Grid system adaptable.</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="p-3 border rounded shadow-sm h-100">
          <h3>🔍 Funcionalidades Avanzadas</h3>
          <ul>
            <li>Búsqueda de productos en tiempo real.</li>
            <li>CRUD completo de productos.</li>
            <li>Modal popup para edición. (881px+).</li>
            <li>Loading states y error handling.</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="p-3 border rounded shadow-sm h-100">
          <h3>🎨 Experiencia de Usuario</h3>
          <ul>
            <li>Interfaz intuitiva y moderna.</li>
            <li>Animaciones y transiciones suaves.</li>
            <li>Mensajes de feedback claros.</li>
            <li>Navegación fluida entre páginas.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>

    {/* Preguntas */}
<div className="mt-5 mb-5 text-center">
  <h2 className="mb-3">¿Tenés alguna pregunta?</h2>
  <p>
    Este proyecto fue desarrollado como parte del aprendizaje de React y las tecnologías modernas de desarrollo web. Si tenés alguna consulta o sugerencia, no dudes en contactarnos.
  </p>
  <a
    href="https://github.com/alexlpda1420"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    Ver más Proyectos
  </a>
</div>

      </section>
    </Layout>
  );
};

export { AboutUs };
