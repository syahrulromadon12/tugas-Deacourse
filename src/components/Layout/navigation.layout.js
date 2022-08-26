import {Navbar, Container, Nav,} from 'react-bootstrap';

const navigation = () => {
  const pathName = window.location.pathname;
  const path = pathName.substring(1);
   return (
      <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Arul app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-primary ms-auto me-auto">
            <Nav.Link href="/"
            className={
              path === ""
                ? "navbar-link active underline"
                : "navbar-link"
            }>HOME</Nav.Link>
            <Nav.Link href="/albums"
            className={
              path === "albums"
                ? "navbar-link active underline"
                : "navbar-link"
            }>IMAGES</Nav.Link>
            <Nav.Link href="/posts"
            className={
              path === "posts"
                ? "navbar-link active underline"
                : "navbar-link"
            }>POSTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}

export default navigation;
