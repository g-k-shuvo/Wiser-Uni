import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Course from "./Course";
import Loader from "./Loader";
import SectionHeading from "./SectionHeading";
import "../styles/PopularCourses.css";
import { useAPI } from "../context/apiContext";

export default function PopularCourses() {
  const { courses, isLoading } = useAPI();

  return (
    <>
      {!isLoading ? (
        <section id="popular-courses" className="section-padding">
          <Container>
            <SectionHeading text="All Courses" />
            <Row>
              {courses.map((course) => (
                <Col key={course.id} md={4}>
                  <Course course={course} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}
