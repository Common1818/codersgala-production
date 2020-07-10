import React, { createContext, useReducer, useEffect } from "react";
import { specialityReducer } from "../reducers/specialityReducer";
import { getSpecialities } from "../crudFunctions/specialityFunctions.js";

export const SpecialityContext = createContext();
const initState = {
  error: null,
};

const SpecialityContextProvider = (props) => {
  const [specialities, dispatch] = useReducer(specialityReducer, initState);
  useEffect(() => {
    getSpecialities(dispatch);
  }, []);
  console.log(specialities);
  return (
    <SpecialityContext.Provider value={{ specialities, dispatch }}>
      {props.children}
    </SpecialityContext.Provider>
  );
};

export default SpecialityContextProvider;
