import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Breadcrumb.css";

export default function Breadcrumb({ text }) {
  return (
    <div className="breadcrumb section-padding">
      <Container>
        <h1>{text}</h1>
      </Container>
    </div>
  );
}
