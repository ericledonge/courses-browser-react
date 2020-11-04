import React from "react"

import CourseCard from './CourseCard';
import "./CourseCard.scss";
import { COURSE, COURSE_2 } from "../../../mocks/Mocks";

export default {
  title: "Course Card",
  component: CourseCard
}

let styles = {
  width: '250px',
};

export const CourseCardWithImage = () => (
  <div style={styles}>
    <CourseCard course={COURSE} />
  </div>
)

export const CourseCardWithoutImage = () => (
  <div style={styles}>
    <CourseCard course={COURSE_2} />
  </div>
)
