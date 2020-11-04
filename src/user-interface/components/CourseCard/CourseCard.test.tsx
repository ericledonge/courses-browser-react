import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CourseCard from "./CourseCard";
import { COURSE } from "../../../mocks/Mocks"
import { cloneDeep } from "lodash"

const A_COURSE = cloneDeep(COURSE);

describe("<CourseCard />", () => {
  let documentBody: RenderResult;

  beforeEach(() => {
    documentBody = render(<CourseCard course={A_COURSE} />);
  });

  test("should display the course name", async () => {
    expect(documentBody.getByText(/Course name/)).toBeInTheDocument();
  });

  test("should display the course author", async () => {
    expect(documentBody.getByText(/Obiwan Kenobi/)).toBeInTheDocument();
  });

  test("should not display the course description", () => {
    expect(documentBody.queryByText(/Course description/)).toBeFalsy()
  });

  describe("when clicking on the show more", () => {
    test("should open the course details ", () => {
      let btn = documentBody.getByText(/Show More/);
      fireEvent.click(btn);

      expect(documentBody.getByText(/Course description/)).toBeInTheDocument()
    });
  });
});
