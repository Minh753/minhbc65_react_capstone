import React from "react";
import ReactDOM from "react-dom/client";

//react router dom
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";

//redux
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import Home from "./page/Home";
import HeaderHome from "./Components/HeaderHome";

export const navigateHistory = createBrowserHistory();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HistoryRouter history={navigateHistory}>
      <HeaderHome />
      <Routes>
        <Route path="" element={<Home />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
