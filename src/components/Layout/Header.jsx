import { Link } from "react-router-dom"
import { useAuth } from "../../context/UserContext"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import logo from "../../assets/images/Virtua-Tienda.webp"
import { FaShoppingCart, FaHome, FaInfoCircle, FaUser, FaSignOutAlt, FaTachometerAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Virtua-Tienda-TEST
        </Navbar.Brand>

        {/* Botón colapsable en mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                  <FaHome className="me-1" /> Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/Dashboard" className="d-flex align-items-center">
                  <FaTachometerAlt className="me-1" /> Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/AboutUs" className="d-flex align-items-center">
                  <FaInfoCircle className="me-1" /> Sobre Nosotros
                </Nav.Link>
                <Nav.Link as={Link} to="/Profile" className="d-flex align-items-center">
                  <FaUser className="me-1" /> Mi Perfil
                </Nav.Link>
                <Button
                  variant="outline-danger"
                  className="ms-2 d-flex align-items-center"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-1" /> Cerrar Sesión
                </Button>
                <Button
                  as={Link}
                  to="/Card"
                  variant="outline-primary"
                  className="ms-2 d-flex align-items-center"
                >
                  <FaShoppingCart size={18} className="me-1" /> Carrito
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                  <FaHome className="me-1" /> Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/AboutUs" className="d-flex align-items-center">
                  <FaInfoCircle className="me-1" /> Sobre Nosotros
                </Nav.Link>
                <Nav.Link as={Link} to="/Login" className="d-flex align-items-center">
                  <FaSignInAlt className="me-1" /> Login
                </Nav.Link>
                <Nav.Link as={Link} to="/Register" className="d-flex align-items-center">
                  <FaUserPlus className="me-1" /> Registrate
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { Header }
