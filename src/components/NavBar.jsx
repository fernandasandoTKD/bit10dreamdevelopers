import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home } from "./Home";
import { Nosotros } from "./Nosotros";
import logo from "../img/logo1.png";
import './css/navbar.css';


export const NavBar = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link to="/">
            <Navbar.Brand>
            <img src={logo} alt="Logo" height="70" className="d-inline-block align-top" />
            </Navbar.Brand>
            </Link>
            <Link className="nav-link" to="/Nosotros">Nosotros</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}
