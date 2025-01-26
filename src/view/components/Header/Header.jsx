import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import "./Header.css"; // External CSS for styling

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowHeader(scrollPos > currentScrollPos || currentScrollPos < 10);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className={`header-navbar ${showHeader ? "show" : "hide"}`}
    >
      <Container>
        {/* Logo on the Left */}
        <Navbar.Brand href="#" className="fw-bold text-primary">
          SocialMediaAuto
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar" />

        {/* Navigation Menu */}
        <Navbar.Collapse id="navbar" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="#about" className="ps-4">
              About
            </Nav.Link>
            <Nav.Link href="#features" className="ps-4">
              Features
            </Nav.Link>
            <Nav.Link href="#testimonials" className="ps-4">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact" className="ps-4">
              Contact
            </Nav.Link>
          </Nav>

          {/* Login and Signup on the Right */}
          <Nav>
            <Nav.Link href="#login">
              <Button variant="outline-primary" className="me-2">
                <FaUser /> Login
              </Button>
            </Nav.Link>
            <Nav.Link href="#signup">
              <Button variant="primary">
                <FaLock /> Signup
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
