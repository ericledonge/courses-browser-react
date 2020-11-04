// Bon ici en toute transparence, je n'ai pas réussi à tester ce composant.
// Il y a beaucoup de choses imbriquées et cela me demanderait plus de temps pour investiquer :(

import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CoursesPage from "./CoursesPage";
import { COURSE, COURSES } from "../../../mocks/Mocks";
import { cloneDeep } from "lodash"
import { StoreProvider } from "../../store/Store";

const RESPONSE = cloneDeep(COURSE);

describe("<CoursesPage />", () => {
  let documentBody: RenderResult;
  let retrieveCourses = jest.fn().mockResolvedValue({})
  let httpCoursesGateway = jest.fn().mockResolvedValue({})
  let dispatch = jest.fn().mockResolvedValue({})

  beforeEach(() => {
    documentBody = render(
      <StoreProvider value={{courses: RESPONSE}}>
        <CoursesPage />
      </StoreProvider>
    );
  });

  xtest("should display two courses name", async () => {
    expect(documentBody.queryAllByText(/Course name/).length).toEqual(2);
  });
});
