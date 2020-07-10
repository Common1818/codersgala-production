import React, { createContext, useReducer, useEffect } from "react";
import { getArticles } from "../crudFunctions/articleFunctions";
import { articlesReducer } from "../reducers/articleReducer";

export const ArticlesContext = createContext();
const initState = {
  error: null,
};

const ArticlesContextProvider = (props) => {
  const [articles, dispatch] = useReducer(articlesReducer, initState);
  useEffect(() => {
    getArticles(dispatch);
  }, []);
  return (
    <ArticlesContext.Provider value={{ articles, dispatch }}>
      {props.children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesContextProvider;
