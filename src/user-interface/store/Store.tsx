import React, { createContext, useReducer } from "react";
import { CourseSearchResult } from "../../web-service/models/CourseSearchResultList";
import reducers from "./Reducers";

export interface State {
  courses: CourseSearchResult | any,
  loading: boolean,
  error: boolean
}

const initialState: State = {
  courses: [],
  loading: false,
  error: false
};

export const Store = createContext<State | any>(initialState);

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducers, initialState);

  return <Store.Provider value={{courses: state.courses, error: state.error, dispatch}}>{props.children}</Store.Provider>;
}
