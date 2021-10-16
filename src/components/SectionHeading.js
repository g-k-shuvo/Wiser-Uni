import React from "react";
import "../styles/SectionHeading.css";

export default function SectionHeading({ text }) {
  return (
    <div className="section-heading">
      <h3>{text}</h3>
    </div>
  );
}
