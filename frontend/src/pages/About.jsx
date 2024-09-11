import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImg01 from '../assets/images/hero-img01.jpg';
import gallery06 from '../assets/images/gallery-06.jpg';
import "../styles/about.css";
"use client";

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h1 className="mission-title">About Us</h1>
            <p className="about-intro">
              Welcome to <b>Travel World,</b> your ultimate companion for planning unforgettable journeys! We are a passionate team dedicated to making travel easier, smarter, and more accessible. Whether you’re dreaming of a serene beach escape, an exhilarating mountain adventure, or a cultural city tour, Travel World is here to help you explore the world on your terms.
            </p>
          </Col>
        </Row>

        {/* Our Story Section */}
        <Row className="my-5">
          <Col lg="6">
            <h2 className="mission-title">Our Mission</h2>
            <p className="about-intro">
              Our mission is simple: to make travel as<b> enjoyable and hassle-free as possible.</b> We aim to empower travelers with the tools they need to explore the world with confidence and ease. By offering a one-stop platform for location discovery, trip planning, and ticket booking, Travel World transforms your travel dreams into memorable experiences.
            </p>
            <br />
            <p className="mission-text">
              <li><b>Discover incredible destinations:</b> From destination guides to ticket booking, we cover every aspect of your trip.</li>
              <li><b>Plan your perfect trip:</b> From destination guides to ticket booking, we cover every aspect of your trip.</li>
              <li><b>Book with ease:</b> From destination guides to ticket booking, we cover every aspect of your trip.</li>

            </p>
          </Col>
          <Col lg="6">
            <img src={heroImg01} alt="Hero" className="mission-image" />
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="my-5">
          <Col lg="6">
            <img src={gallery06} alt="Hero" className="mission-image" />
          </Col>
          <Col lg="6">
            <h2 className="mission-title">Why you Choose us</h2>
            <p className="mission-text">
              <li><b>Comprehensive Services:</b> From destination guides to ticket booking, we cover every aspect of your trip.</li>
              <li><b>Personalized Travel Planning:</b> Tailor your trip exactly the way you want it, with recommendations suited to your preferences.</li>
              <li><b>Easy and Secure Bookings:</b> Book your flights, trains, and stays through our secure platform without any hassle.</li>
              <li><b>Dedicated Support:</b> Our team is here to assist you every step of the way, ensuring your trip is smooth and enjoyable.</li>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;