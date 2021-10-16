import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../images/about-banner-bg.webp";
import "../styles/AboutBanner.css";

export default function AboutBanner() {
  return (
    <section id="about-banner" className="section-padding">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-banner-img">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-banner-text">
              <h1>About Wiser University</h1>
              <p>
                Since its founding in 1701, Wiser has been dedicated to
                expanding and sharing knowledge, inspiring innovation, and
                preserving cultural and scientific information for future
                generations.
              </p>
              <p>
                Wiser’s reach is both local and international. It partners with
                its hometown of New Haven, Connecticut to strengthen the city’s
                community and economy. And it engages with people and
                institutions across the globe in the quest to promote cultural
                understanding, improve the human condition, delve more deeply
                into the secrets of the universe, and train the next generation
                of world leaders.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
