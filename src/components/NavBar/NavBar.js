import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DataContext } from "../../App";
import "../../Css/NavBar/NavBar.css";

function NavBar({ searchItems }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );
  const navigator = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="nav-custom">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="/react-udemy-clone">
          <img
            width="80"
            height="33"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll" className="navbarScroll">
          <Nav className="menu" style={{ maxHeight: "200px" }} navbarScroll>
            <Nav.Link href="#action1" className="item">
              categories
            </Nav.Link>
            <Form className="d-flex flex-md-grow-1">
              <Button
                type="submit"
                variant="outline-succes"
                className="searchBtn"
                onClick={(e) => {
                  e.preventDefault();
                  searchItems(searchQuery);
                  navigator({
                    pathname: "/react-udemy-clone/",
                    search: `?query=${searchQuery}`,
                  });
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                id="searchInput"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#action2" className="item">
              Udemy Business
            </Nav.Link>
            <Nav.Link href="#action2" className="item">
              Teach on Udemy
            </Nav.Link>
            <Nav.Link className="item">
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            <button className="btn  border-dark login">Log In</button>
            <button className="btn btn-dark singup">Sign Up</button>
            <button className="btn border-dark lang-icon">
              <i className="fa-solid fa-globe"></i>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
