import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";
"use client";



const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>About Us</h1>
            <p>
              We are a dedicated team committed to providing exceptional services
              and memorable experiences for our customers. Our mission is to bring
              your vision to life with creativity and passion.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver top-quality service, exceeding expectations 
              at every turn. We focus on innovation and excellence in all that we do.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export function Component() {
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
    );
  }

export default About;
