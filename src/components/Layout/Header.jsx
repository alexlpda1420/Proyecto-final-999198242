
import { Link } from "react-router-dom"
import { useAuth } from "../../context/UserContext"
import { Navbar, Nav, Container, Button } from "react-bootstrap"

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
            src="https://images.seeklogo.com/logo-png/43/2/escudo-river-plate-2022-logo-png_seeklogo-435015.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Mi Tienda
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
                <Button
                  variant="outline-danger"
                  className="ms-2"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
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

export {Header}