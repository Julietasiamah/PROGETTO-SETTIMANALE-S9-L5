import { Container, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex">
        <Navbar.Brand href="#">
          <img
            src="src\assets\logo.png"
            width="100"
            height="55"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recentrly added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
            <div>
              <Search />
              <div>KIDS</div>
              <Bell />
              <PersonCircle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
