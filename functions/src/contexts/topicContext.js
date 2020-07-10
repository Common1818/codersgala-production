"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TopicsContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _topicReducer = require("../reducers/topicReducer");

var _topicFunctions = require("../crudFunctions/topicFunctions");

var TopicsContext = (0, _react.createContext)();
exports.TopicsContext = TopicsContext;
var initState = {
  error: null
};

var TopicsContextProvider = function TopicsContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(_topicReducer.topicsReducer, initState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      topics = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    (0, _topicFunctions.getTopics)(dispatch);
  }, []);
  return /*#__PURE__*/_react.default.createElement(TopicsContext.Provider, {
    value: {
      topics: topics,
      dispatch: dispatch
    }
  }, props.children);
};

var _default = TopicsContextProvider;
exports.default = _default;