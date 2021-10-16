import React from "react";
import AllCourses from "../AllCourses";
import Breadcrumb from "../Breadcrumb";

export default function Courses() {
  return (
    <>
      <Breadcrumb text="Our Courses" />
      <AllCourses />
    </>
  );
}
