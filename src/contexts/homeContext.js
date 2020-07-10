import React, { createContext, useReducer, useEffect } from "react";
import { homeReducer } from "../reducers/homeReducer";
import { getHome } from "../crudFunctions/homeFunctions";

export const HomeContext = createContext();
const initState = {
  error: null,
};

let mode = "light";
if (typeof window !== "undefined") {
  mode = localStorage.getItem("mode");
}

const HomeContextProvider = (props) => {
  const [home, dispatch] = useReducer(homeReducer, initState);

  useEffect(() => {
    getHome(dispatch);
  }, []);
  if (home && home.home) {
    console.log(home && home.home);
  }

  return (
    <HomeContext.Provider value={{ home, dispatch, mode }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
