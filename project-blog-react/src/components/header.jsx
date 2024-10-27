import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header (currentPage) {
    console.log(currentPage)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  style={currentPage.page === "home" ? { textDecoration: "underline", color:"black" } : {color:"grey"}}>Home</Nav.Link>
            {/* <Nav.Link href="#post"  style={currentPage.page === "post" ? { textDecoration: "underline", color:"black" } : {color:"grey"}}>Articles</Nav.Link> */}
            <Nav.Link href="#contact"  style={currentPage.page === "contact" ? { textDecoration: "underline", color:"black" } : {color:"grey"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;