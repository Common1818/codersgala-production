"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMode = void 0;

var updateMode = function updateMode(mode, dispatch) {
  dispatch({
    type: "UPDATE_MODE",
    mode: mode
  });
};

exports.updateMode = updateMode;