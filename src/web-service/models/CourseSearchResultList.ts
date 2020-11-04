export interface CourseSearchResultList {
  publicLearningPathResults: CourseSearchResult[]; // learning path = course
  count: number;
}

export interface CourseSearchResult {
  id: number;
  name: string;
  description: string;
  language: string;
  creationDate: Date;
  modificationDate?: Date;
  user: User;
  images?: CourseImages;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface CourseImages {
  thumbnail: string;
  overview: string;
}
