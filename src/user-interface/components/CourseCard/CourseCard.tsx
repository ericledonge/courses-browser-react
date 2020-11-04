import React, { useState } from "react";
import "./CourseCard.scss";
import { CourseSearchResult } from "../../../web-service/models/CourseSearchResultList";
import CourseDetails from "../CourseDetails/CourseDetails";

export interface CourseCardProps {
  course: CourseSearchResult
}

export default function CourseCard({course}: CourseCardProps): JSX.Element {

  let cardHeader;

  if (course.images) {
    cardHeader = <div className="course-card__image" style={{backgroundImage: `url(${course.images.thumbnail})`}} />;
  } else {
    cardHeader = <div className="course-card__image" />;
  }

  const author = `${course.user.firstName} ${course.user.lastName}`;

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="course-card">
        <div className="course-card__header">
          {cardHeader}
        </div>
        <div className="course-card__body">
          <div>
            <div className="course-card__name">{course.name}</div>
            <div className="course-card__author text-truncate-line">By {author} </div>
          </div>
          <div className="course-card__action">
            <button className="btn btn-sm" onClick={handleShow}>Show More</button>
          </div>
        </div>
      </div>

      <CourseDetails course={course} show={show} handleClose={handleClose} />
    </>
  );
};
