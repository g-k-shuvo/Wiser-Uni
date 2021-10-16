import React from "react";
import "../styles/Banner.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section id="banner">
      <Container>
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-text">
              <h1>
                Boost up your skills <br /> with a new way of <br /> learning.
              </h1>
            </div>

            <div className="banner-btns">
              <Link className="wu-btn getStarted" to="/courses">
                Get Started
              </Link>

              <Link className="wu-btn takeATour" to="/about">
                Take A Tour
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
