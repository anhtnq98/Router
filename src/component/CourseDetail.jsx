import React from "react";
import { useLocation, useParams } from "react-router-dom";

function CourseDetail() {
  const params = useParams();
  //   const courseId = useLocation();
  return <div>Course Id: {params.courseId}</div>;
}

export default CourseDetail;
