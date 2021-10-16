import {
  faBookReader,
  faGraduationCap,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Services.css";

export default function Services() {
  return (
    <section id="services">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="service service-1">
              <div className="service-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="service-text">
                <h4>Scholarship</h4>
                <p>Available</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="service service-2">
              <div className="service-icon">
                <FontAwesomeIcon icon={faBookReader} />
              </div>
              <div className="service-text">
                <h4>Extra Care</h4>
                <p>Available</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="service service-3">
              <div className="service-icon">
                <FontAwesomeIcon icon={faSmile} />
              </div>
              <div className="service-text">
                <h4>Environment</h4>
                <p>Available</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
