import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row className="mb-4">
        {/* Footer Logo and Description */}
        <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
          <h4 className="text-primary">SocialMediaAuto</h4>
          <p>
            Your go-to platform for automated social media management and
            insights.
          </p>
        </Col>

        {/* Quick Links Section */}
        <Col md={4} className="text-center mb-3 mb-md-0">
          <h5>Quick Links</h5>
          <Nav className="flex-column align-items-center">
            <Nav.Link href="#about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#features" className="text-white">
              Features
            </Nav.Link>
            <Nav.Link href="#testimonials" className="text-white">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Col>

        {/* Social Media Links */}
        <Col md={4} className="text-center">
          <h5>Follow Us</h5>
          <div>
            <Link to="#" className="text-white mx-2">
              <FaFacebook size={24} />
            </Link>
            <Link to="#" className="text-white mx-2">
              <FaTwitter size={24} />
            </Link>
            <Link to="#" className="text-white mx-2">
              <FaLinkedin size={24} />
            </Link>
            <Link to="#" className="text-white mx-2">
              <FaInstagram size={24} />
            </Link>
          </div>
        </Col>
      </Row>

      {/* Copyright Section */}
      <Row>
        <Col className="text-center">
          <p>&copy; 2025 SocialMediaAuto. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
