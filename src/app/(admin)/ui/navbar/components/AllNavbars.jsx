import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Button, Col, Container, DropdownDivider, FormControl, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown, NavItem, NavLink, Offcanvas, OffcanvasTitle, Row } from 'react-bootstrap';
const BasicNavbar = () => {
  return <ComponentContainerCard title="Navbar" description={<p className="text-muted mb-0">
          all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
        </p>}>
      <Navbar expand="lg" collapseOnSelect className="bg-light">
        <Container fluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </NavbarToggle>
          <NavbarCollapse id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink className="active" aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavDropdown title="Dropdown">
                <li>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                </li>
                <li>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                </li>
                <li>
                  <DropdownDivider />
                </li>
                <li>
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </li>
              </NavDropdown>
              <NavItem>
                <NavLink disabled aria-disabled="true">
                  Disabled
                </NavLink>
              </NavItem>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </form>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </ComponentContainerCard>;
};
const NavBarDropdown = () => {
  return <ComponentContainerCard title="Navbar-Dropdown" description={<p className="text-muted mb-0">
          You can also use dropdowns in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested
          elements for .nav-item and .nav-link as shown below.
        </p>}>
      <Navbar expand="lg" className="bg-light">
        <Container fluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </NavbarToggle>
          <NavbarCollapse id="navbarNavDropdown">
            <ul className="navbar-nav">
              <NavItem>
                <NavLink active aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
              <NavDropdown title="Dropdown link">
                <li>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                </li>
                <li>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                </li>
                <li>
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </li>
              </NavDropdown>
            </ul>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </ComponentContainerCard>;
};
const NavbarText = () => {
  return <ComponentContainerCard title="Text" description={<p className="text-muted mb-0">
          Navbars may contain bits of text with the help of .navbar-text. This class adjusts vertical alignment and horizontal spacing for strings of
          text.
        </p>}>
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <NavbarBrand href="#">Navbar w/ text</NavbarBrand>
          <NavbarToggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </NavbarToggle>
          <NavbarCollapse id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink active aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
            </ul>
            <span className="navbar-text">Navbar text with an inline element</span>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </ComponentContainerCard>;
};
const NavbarOffcanvasExample = () => {
  return <ComponentContainerCard title="Offcanvas" description={<p className="text-muted mb-0">
          Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default
          styles and use our .navbar-expand-* classes to create a dynamic and flexible navigation sidebar.
        </p>}>
      <Navbar bg="light" expand="none">
        <Container fluid>
          <NavbarBrand href="#">Offcanvas navbar</NavbarBrand>
          <NavbarToggle type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </NavbarToggle>
          <Navbar.Offcanvas placement="end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <Offcanvas.Header closeButton>
              <OffcanvasTitle as={'h5'} id="offcanvasNavbarLabel">
                Offcanvas
              </OffcanvasTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <NavItem>
                  <NavLink active aria-current="page" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavDropdown title="Dropdown">
                  <li>
                    <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  </li>
                  <li>
                    <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                  </li>
                </NavDropdown>
              </ul>
              <form className="d-flex mt-3" role="search">
                <FormControl className="me-2" type="search" placeholder="Search" aria-label="Search" />
                <Button variant="outline-success" type="submit">
                  Search
                </Button>
              </form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </ComponentContainerCard>;
};
const AllNavbars = () => {
  return <Row>
      <Col xl={6}>
        <BasicNavbar />
      </Col>
      <Col xl={6}>
        <NavBarDropdown />
      </Col>
      <Col xl={6}>
        <NavbarText />
      </Col>
      <Col xl={6}>
        <NavbarOffcanvasExample />
      </Col>
    </Row>;
};
export default AllNavbars;