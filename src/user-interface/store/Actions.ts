import httpCoursesGateway from "../services/Services";

export default async function retrieveCourses(dispatch: any) {
  try {
    const response = await httpCoursesGateway();
    dispatch({type: "RETRIEVE_COURSES_SUCCESS", payload: response});
  } catch (e) {
    console.error(e);
    dispatch({type: "RETRIEVE_COURSES_ERROR"});
  }
}
