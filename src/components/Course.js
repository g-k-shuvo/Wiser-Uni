import React from "react";
import "../styles/Course.css";
import Button from "./Button";

export default function Course({ course }) {
  return (
    <div className="course">
      <div className="course-img">
        <img src={course.image} alt={course.name} />
      </div>
      <div className="course-info">
        <p>{course.category}</p>
        <h4>{course.name}</h4>
        <h5>Total Cost: ${course.cost}</h5>
        <Button className="course-btn" children="Enroll Now" />
      </div>
    </div>
  );
}
