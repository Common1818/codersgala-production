import React, { createContext, useReducer, useEffect } from "react";
import { topicsReducer } from "../reducers/topicReducer";
import { getTopics } from "../crudFunctions/topicFunctions";

export const TopicsContext = createContext();
const initState = {
  error: null,
};

const TopicsContextProvider = (props) => {
  const [topics, dispatch] = useReducer(topicsReducer, initState);
  useEffect(() => {
    getTopics(dispatch);
  }, []);
  return (
    <TopicsContext.Provider value={{ topics, dispatch }}>
      {props.children}
    </TopicsContext.Provider>
  );
};

export default TopicsContextProvider;
