import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseDetails from "./CourseDetails";
import { COURSE } from "../../../mocks/Mocks"
import { cloneDeep } from "lodash"

const A_COURSE = cloneDeep(COURSE);
const SHOW = true;
const HANDLE_CLOSE = jest.fn();

describe("<CourseDetails />", () => {
  let documentBody: RenderResult;

  beforeEach(() => {
    documentBody = render(<CourseDetails course={A_COURSE} show={SHOW} handleClose={HANDLE_CLOSE} />);
  });

  test("should display the course name", async () => {
    expect(documentBody.getByText(/Course name/)).toBeInTheDocument();
  });

  test("should display the course description", async () => {
    expect(documentBody.getByText(/Course description/)).toBeInTheDocument();
  });
});
