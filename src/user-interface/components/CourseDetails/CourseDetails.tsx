import React from "react";
import "./CourseDetails.scss";
import Modal from "react-bootstrap/Modal";
import { CourseSearchResult } from "../../../web-service/models/CourseSearchResultList";

interface CourseDetailsProps {
  course: CourseSearchResult,
  show: boolean,
  handleClose: any
}

export default function CourseDetails({course, show, handleClose}: CourseDetailsProps): JSX.Element {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{course.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{course.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-sm" onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};
