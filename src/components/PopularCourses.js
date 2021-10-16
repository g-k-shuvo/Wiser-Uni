import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Course from "./Course";
import SectionHeading from "./SectionHeading";
import "../styles/PopularCourses.css";
import { Link } from "react-router-dom";
import { useAPI } from "../context/apiContext";
import Loader from "./Loader";

export default function PopularCourses() {
  const { courses, isLoading } = useAPI();
  const popularCourses = courses.slice(0, 3);
  return (
    <section id="popular-courses" className="section-padding">
      <Container>
        <SectionHeading text="Popular Programms" />

        {!isLoading ? (
          <>
            <Row>
              {popularCourses.map((course) => (
                <Col key={course.id} md={4}>
                  <Course course={course} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col md={12}>
                <div className="popular-courses-all">
                  <Link to="/courses" className="wu-btn">
                    View All Courses
                  </Link>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </section>
  );
}
