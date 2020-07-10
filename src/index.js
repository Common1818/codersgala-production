import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SpecialityContextProvider from "./contexts/specialityContext";
import AuthContextProvider from "./contexts/authContext";
import TopicsContextProvider from "./contexts/topicContext";
import ArticlesContextProvider from "./contexts/articleContext";
import HomeContextProvider from "./contexts/homeContext";
// Bootstrap

import ModeContextProvider from "./contexts/modeContext";
import "./index.css";
console.log(window.__INITIAL_DATA__);
ReactDOM.hydrate(
  <AuthContextProvider>
    <SpecialityContextProvider>
      <TopicsContextProvider>
        <ArticlesContextProvider>
          <HomeContextProvider>
            <ModeContextProvider>
              <BrowserRouter>
                <App articlesArray={window.__INITIAL_DATA__} />
              </BrowserRouter>
            </ModeContextProvider>
          </HomeContextProvider>
        </ArticlesContextProvider>
      </TopicsContextProvider>
    </SpecialityContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
