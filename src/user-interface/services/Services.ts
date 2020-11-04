const URL = "https://lx.festo.com/SearchService/api/search/learning-paths/public";

export default async function httpCoursesGateway() {
  try {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dataJSON.publicLearningPathResults;
  } catch (e) {
    throw new Error(e);
  }
}
