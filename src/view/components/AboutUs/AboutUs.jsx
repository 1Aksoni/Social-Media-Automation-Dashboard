import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import aboutImg from "../../../assets/images/data-solutions.png";
import "./AboutUs.css";

const AboutUs = () => (
  <section id="about" className="about-section py-5">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <motion.h2
            className="display-5 fw-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="lead mt-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Our mission is to revolutionize the way businesses manage social
            media. With our automation tools, you can focus on creating
            meaningful content while we handle the repetitive tasks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button variant="primary" className="mt-3">
              Learn More
            </Button>
          </motion.div>
        </Col>
        <Col md={6} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid rounded shadow-lg"
              style={{ height: "350px", width: "350px", objectFit: "cover" }}
            />
          </motion.div>
        </Col>
      </Row>
    </Container>
    <div className="decorative-circles">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
    </div>
    <div className="bg-pattern">
      <div className="pattern-item pattern-item-1"></div>
      <div className="pattern-item pattern-item-2"></div>
      <div className="pattern-item pattern-item-3"></div>
    </div>
  </section>
);

export default AboutUs;
