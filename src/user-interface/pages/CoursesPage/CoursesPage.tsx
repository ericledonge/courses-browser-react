import React, { useContext, useEffect } from "react";
import "./CoursesPage.scss";
import { Store } from "../../store/Store";
import CourseCard from "../../components/CourseCard/CourseCard";
import { CourseSearchResult } from "../../../web-service/models/CourseSearchResultList";
import retrieveCourses from "../../store/Actions";

export default function CoursesPage(): JSX.Element {
  const {courses, error, dispatch} = useContext(Store);

  // TODO: May improve that to deal with cancelled request.
  useEffect(() => {
     retrieveCourses(dispatch);
  }, [dispatch]);

  let coursesResult;

  if (error === true) {
    coursesResult = <div className="course-card__error">Sorry we are experimenting an issue with the server.</div>;
  } else {
    coursesResult = courses.map((course: CourseSearchResult) => (
      <div className="col-6 col-md-6 col-lg-4 col-xl-3">
        <CourseCard key={course.id} course={course} />
      </div>
    ))
  }

  return (
    <div className="courses-page">
      <div className="row grid-gutter-y-normal grid-gutter-x-half grid-gutter-x-md-normal">
        {coursesResult}
      </div>
    </div>
  );
};
