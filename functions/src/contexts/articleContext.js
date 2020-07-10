"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ArticlesContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _articleFunctions = require("../crudFunctions/articleFunctions");

var _articleReducer = require("../reducers/articleReducer");

var ArticlesContext = (0, _react.createContext)();
exports.ArticlesContext = ArticlesContext;
var initState = {
  error: null
};

var ArticlesContextProvider = function ArticlesContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(_articleReducer.articlesReducer, initState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      articles = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    (0, _articleFunctions.getArticles)(dispatch);
  }, []);
  return /*#__PURE__*/_react.default.createElement(ArticlesContext.Provider, {
    value: {
      articles: articles,
      dispatch: dispatch
    }
  }, props.children);
};

var _default = ArticlesContextProvider;
exports.default = _default;