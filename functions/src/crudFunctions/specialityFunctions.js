"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCardFunction = exports.UpdateCard = exports.getSpecialities = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fbConfig = _interopRequireDefault(require("../config/fbConfig"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getSpecialities = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dispatch) {
    var specialitiesArray, specialitiesArraySnapshot;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            specialitiesArray = [];
            _context.next = 3;
            return _fbConfig.default.firestore().collection("Specialities").orderBy("timestamp", "desc").get();

          case 3:
            specialitiesArraySnapshot = _context.sent;
            specialitiesArraySnapshot.docs.map(function (doc) {
              specialitiesArray.push(_objectSpread({
                id: doc.id
              }, doc.data()));
              return null;
            });
            dispatch({
              type: "FETCH_SPECIALITIES",
              specialitites: specialitiesArray
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSpecialities(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSpecialities = getSpecialities;

var UpdateCard = function UpdateCard(state, dispatch) {
  console.log(state);

  _fbConfig.default.firestore().collection("Specialities").doc(state.id).update(_objectSpread({}, state)).then(function () {
    _fbConfig.default.firestore().collection("Articles").doc(state.articleId).update({
      ArticleContent: state.ArticleContent
    }).then(function () {
      dispatch({
        type: "UPDATE_CARD",
        message: "Article updated successfully",
        color: "success",
        complete: true
      });
    });
  }).catch(function () {
    dispatch({
      type: "UPDATE_CARD",
      message: "Error updating article",
      color: "danger",
      complete: true
    });
  });
};

exports.UpdateCard = UpdateCard;

var AddCardFunction = function AddCardFunction(state, dispatch) {
  var imageUrl = state.imageUrl,
      Loading = state.Loading,
      Name = state.Name,
      ArticleContent = state.ArticleContent;

  _fbConfig.default.firestore().collection("Specialities").add({
    imageUrl: imageUrl,
    Name: Name,
    timestamp: _fbConfig.default.firestore.FieldValue.serverTimestamp()
  }).then(function () {
    _fbConfig.default.firestore().collection("Articles").add({
      ArticleName: Name + "Intro",
      ArticleContent: ArticleContent,
      timestamp: _fbConfig.default.firestore.FieldValue.serverTimestamp()
    });

    dispatch({
      type: "ADD_CARD",
      message: "Article added successfully",
      color: "success",
      complete: true
    });
  }).catch(function () {
    dispatch({
      type: "UPDATE_CARD",
      message: "Error adding article",
      color: "danger",
      complete: true
    });
  });
};

exports.AddCardFunction = AddCardFunction;