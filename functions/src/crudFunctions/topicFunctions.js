"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTopicFunction = exports.UpdateTopic = exports.AddTopic = exports.getTopics = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fbConfig = _interopRequireDefault(require("../config/fbConfig"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getTopics = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dispatch) {
    var topicsArray, topicsArraySnapshot;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            topicsArray = [];
            _context.next = 3;
            return _fbConfig.default.firestore().collection("TopicNames").orderBy("timestamp", "desc").get();

          case 3:
            topicsArraySnapshot = _context.sent;
            topicsArraySnapshot.docs.map(function (doc) {
              topicsArray.push(_objectSpread({
                id: doc.id
              }, doc.data()));
              return null;
            });
            dispatch({
              type: "FETCH_TOPICS",
              topics: topicsArray
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTopics(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTopics = getTopics;

var AddTopic = function AddTopic(state, dispatch) {
  _fbConfig.default.firestore().collection("TopicNames").add(_objectSpread(_objectSpread({}, state), {}, {
    timestamp: _fbConfig.default.firestore.FieldValue.serverTimestamp()
  })).then(function () {
    dispatch({
      type: "ADD_TOPIC",
      message: "Added topic Successfully",
      color: "success"
    });
  }).catch(function (err) {
    dispatch({
      type: "ADD_TOPIC",
      message: "Error Adding Topic",
      color: "danger"
    });
  });

  return null;
};

exports.AddTopic = AddTopic;

var UpdateTopic = function UpdateTopic(state, dispatch) {
  _fbConfig.default.firestore().collection("TopicNames").doc(state.id).update(_objectSpread({}, state)).then(function () {
    dispatch({
      type: "UPDATE_TOPIC",
      message: "Updated topic Successfully",
      color: "success"
    });
  }).catch(function (err) {
    dispatch({
      type: "UPDATE_TOPIC",
      message: "Error Updating Topic",
      color: "danger"
    });
  });
};

exports.UpdateTopic = UpdateTopic;

var DeleteTopicFunction = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(collectionName, id, dispatch) {
    var snapshot;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _fbConfig.default.firestore().collection("Articles").get();

          case 2:
            snapshot = _context2.sent;
            snapshot.docs.map(function (doc) {
              var item = doc.data();
              console.log(item);

              if (item.TopicId === id) {
                //deleting all the articles related to that topic id and deleting it.
                _fbConfig.default.firestore().collection("Articles").doc(doc.id).delete().then(function () {
                  _fbConfig.default.firestore().collection(collectionName).doc(id).delete().then(function () {
                    dispatch({
                      type: "TOPIC_DELETE",
                      message: "Topic deleted successfully",
                      complete: true
                    });
                  }).catch(function () {
                    dispatch({
                      type: "TOPIC_DELETE",
                      message: "Error deleteting topic",
                      complete: true
                    });
                  });
                });
              } else {
                _fbConfig.default.firestore().collection(collectionName).doc(id).delete().then(function () {
                  dispatch({
                    type: "TOPIC_DELETE",
                    message: "Topic deleted successfully",
                    complete: true
                  });
                }).catch(function () {
                  dispatch({
                    type: "TOPIC_DELETE",
                    message: "Error deleting topic",
                    complete: true
                  });
                });
              }

              return null;
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function DeleteTopicFunction(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.DeleteTopicFunction = DeleteTopicFunction;