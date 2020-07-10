import React, { createContext, useReducer } from "react";
import { modeReducer } from "../reducers/modeReducer";

export const ModeContext = createContext();
let mode = "light"
if (typeof window !== 'undefined') {
   mode = localStorage.getItem("mode");
}
 
const initState = {
  mode: mode,
};
const ModeContextProvider = (props) => {

  const [mode, dispatch] = useReducer(modeReducer, initState);

  return (
    <ModeContext.Provider value={{ mode, dispatch }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
