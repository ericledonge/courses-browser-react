import { CourseSearchResultList } from "../../web-service/models/CourseSearchResultList";
import { State } from "./Store";

type ACTION_TYPE =
  | { type: "RETRIEVE_COURSES_SUCCESS"; payload: CourseSearchResultList }
  | { type: "RETRIEVE_COURSES_ERROR" }

// TODO: Put a RETRIEVE_COURSES_LOADING to manage a loader/spinner.
export default function reducers(state: State, action: ACTION_TYPE) {
  switch (action.type) {
    case "RETRIEVE_COURSES_SUCCESS":
      return {...state, courses: action.payload};
    case "RETRIEVE_COURSES_ERROR":
      return {...state, error: true};
    default:
      throw new Error();
  }
}
