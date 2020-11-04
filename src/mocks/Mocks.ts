export const COURSE = {
  id: 1,
  name: "Course name",
  description: "Course description",
  language: "Course language",
  creationDate: new Date(),
  user: {
    id: 1,
    firstName: "Obiwan",
    lastName: "Kenobi"
  },
  images: {
    thumbnail: "https://cdn.mos.cms.futurecdn.net/mjFFaYRSujxEFhV44NRBuQ-1024-80.jpg.webp",
    overview: "https://cdn.mos.cms.futurecdn.net/mjFFaYRSujxEFhV44NRBuQ-1024-80.jpg.webp"
  }
};

export const COURSE_2 = {
  id: 2,
  name: "Course name 2",
  description: "Course description 2",
  language: "Course language 2",
  creationDate: new Date(),
  user: {
    id: 1,
    firstName: "Luke",
    lastName: "Skywalker"
  }
};

export const COURSES = {
  publicLearningPathResults: [
    COURSE,
    COURSE_2
  ],
  count: 2
};
