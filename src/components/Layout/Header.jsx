
import { Link } from "react-router-dom"
import { useAuth } from "../../context/UserContext"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import logo from "../../assets/images/Virtua-Tienda.webp"
import { FaShoppingCart } from "react-icons/fa"

const Header = () => {

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
          Virtua-Tienda
        </Navbar.Brand>

        {/* Botón colapsable en mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/AboutUs">Sobre Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/Profile">Mi Perfil</Nav.Link>
                <Button
                  variant="outline-danger"
                  className="ms-2"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </Button>
                <Button
                  as={Link}
                  to="/Card"
                  variant="outline-primary"
                  className="ms-2 d-flex align-items-center"
                >
                  <FaShoppingCart size={18} className="me-1" />
                  Carrito
                </Button>


              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                <Nav.Link as={Link} to="/Register">Registrate</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Header }