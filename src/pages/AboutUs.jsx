import { Layout } from "../components/Layout/Layout";
import logo from "../assets/images/Virtua-Tienda.webp"

const AboutUs = () => {
  return (
    <Layout>
      <section className="container my-5">
        <h1 className="mb-4 text-center">Acerca de Nosotros</h1>

        {/* Sección de introducción con párrafos */}
        <div className="mb-5 text-center">
          <p>
            En Virtua Tienda, nos impulsa la pasión por ofrecerte la mejor experiencia de compra. Nos esforzamos para proporcionarte productos de calidad, atención personalizada y envíos rápidos.
            Estamos comprometidos contigo, y con mejorar siempre para que tu experiencia sea cada vez más satisfactoria.
          </p>
          <p>
            Nuestro compromiso es contigo, nuestro cliente, y con la innovación
            constante para mejorar cada día.
          </p>
        </div>

        {/* Sección de valores / beneficios en tres columnas responsivas */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <h3>🎯 Sobre el Proyecto</h3>
            <p>
              Este proyecto de e-commerce fue creado como parte de nuestro curso de React. Es una tienda online que simula una experiencia de compra real, con características como autenticación, administración de productos y navegación fluida. El proyecto resalta las mejores prácticas de desarrollo frontend, incluyendo manejo de estado, enrutamiento, formularios validados y diseño adaptable.
            </p>
          </div>
          <div className="col-md-4">
            <h3>👥 A Quién Está Dirigida</h3>
            <p>
              Este proyecto está orientado a desarrolladores y estudiantes que buscan aprender React y tecnologías modernas de desarrollo web. También actúa como referencia para implementar funciones comunes en aplicaciones web. Los usuarios podrán explorar productos, registrarse, iniciar sesión y gestionar el catálogo, ofreciendo una experiencia de compra completa.
            </p>
          </div>
          <div className="col-md-4">
            <h3>⚡ Tecnologías y Herramientas Utilizadas</h3>
            <p>
              <strong>Frontend:</strong> React 19, React Router DOM, Vite <br /><br />
              <strong>Estilos:</strong> CSS moderno con variables, Grid, Flexbox y diseño responsive <br /><br />
              <strong>APIs:</strong>
              FakeStoreAPI para productos y autenticación <br /><br />
              <strong>Enfoques:</strong>Componentes funcionales, Context API, formularios controlados y validación en tiempo real.
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
        <div className="mb-3 text-center">
          <h2>Nuestra Historia</h2>
          <p>  
            Virtua Tienda nació con el objetivo de crear un lugar donde la tecnología y la confianza se encuentren, ofreciendo productos exclusivos y un servicio excepcional.
A lo largo de los años, nuestro crecimiento ha sido posible gracias a la lealtad de nuestros clientes y al compromiso incansable de nuestro equipo.
Hoy seguimos expandiendo nuestro catálogo, perfeccionando la experiencia de compra y apoyando a nuestra comunidad.
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
