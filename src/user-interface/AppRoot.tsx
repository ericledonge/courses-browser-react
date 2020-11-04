import React from "react";
import "./AppRoot.scss";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./store/Store";

export default function AppRoot(): JSX.Element {
  return (
    <div className="app-root">
      <div className="container my-5">
        <StoreProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/courses"} component={() => <CoursesPage />} />
              <Redirect to={"/courses"} />
            </Switch>
          </BrowserRouter>
        </StoreProvider>
      </div>
    </div>
  );
};
