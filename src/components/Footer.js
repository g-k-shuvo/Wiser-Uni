import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-about">
              <h3>Wiser University</h3>
              <p>
                We are one of the largest, most diverse universities in the UK
                with over 120,000 students in London, and a further 50,000
                studying across 190 countries for a University of London degree.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-links">
              <h3>Important Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-socials">
              <h3>Socials</h3>
              <ul>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
