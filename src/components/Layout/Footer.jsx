import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Iconos de redes sociales
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="container my-4 text-center">
      <div className="row">
        {/* Columna para Enlaces útiles */}
        <div className="col-12 col-md-4">
          <h5>Enlaces Útiles</h5>
          
          
          <ul className="list-unstyled">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/AboutUs">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/Login">Iniciar Sesión</Link>
            </li>
            <li>
             <Link to="/Register">Registrate</Link>
            </li>
          </ul>
        </div>

        {/* Columna para Redes Sociales */}
        <div className="col-12 col-md-4">
          <h5>Redes Sociales</h5>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://www.facebook.com/alexlpda1420" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://x.com/aeroldan7" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com/alexlpda1420/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/alexis-esteban-roldan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/alexlpda1420" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* Columna para Información de contacto */}
        <div className="col-12 col-md-4">
          <h5>Contacto</h5>
          <p>
            Desarrollado por <strong>Alexis Roldan</strong>. Puedes cotactarte conmigo <a href="https://github.com/alexlpda1420">desde aqui</a>.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h6>© Copyright - Alexis Roldan - 2025</h6>
      </div>
    </footer>
  );
}

export { Footer };
