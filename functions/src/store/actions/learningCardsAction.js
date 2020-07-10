"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delete = exports.Update = exports.Add = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Add = function Add(collectionName, state) {
  return function (dispatch, getState, _ref) {
    var getFirebase = _ref.getFirebase,
        getFirestore = _ref.getFirestore;
    var firestore = getFirestore();
    firestore.collection(collectionName).add(_objectSpread({}, state)).then(function () {
      console.log("added");
    });
  };
};

exports.Add = Add;

var Update = function Update(collectionName, state) {
  return function (dispatch, getState, _ref2) {
    var getFirebase = _ref2.getFirebase,
        getFirestore = _ref2.getFirestore;
    var firestore = getFirestore();
    firestore.collection(collectionName).doc(state.id).update(_objectSpread({}, state)).then(function () {
      console.log("updated");
    });
  };
};

exports.Update = Update;

var Delete = function Delete(collectionName, id) {
  return /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dispatch, getState, _ref3) {
      var getFirebase, getFirestore, firestore, state, snapshot, ArticlesSnapshot, TopicNamesSnapshot;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getFirebase = _ref3.getFirebase, getFirestore = _ref3.getFirestore;
              firestore = getFirestore();
              state = getState();

              if (!(collectionName === "Articles")) {
                _context.next = 7;
                break;
              }

              firestore.collection(collectionName).doc(id).delete().then(function () {
                console.log("deleted");
              });
              _context.next = 26;
              break;

            case 7:
              if (!(collectionName === "TopicNames")) {
                _context.next = 14;
                break;
              }

              _context.next = 10;
              return firestore.collection("Articles").get();

            case 10:
              snapshot = _context.sent;
              snapshot.docs.map(function (doc) {
                var item = doc.data();
                console.log(item);
                console.log(state);

                if (item.TopicId === id) {
                  //deleting all the articles related to that topic id and deleting it.
                  firestore.collection("Articles").doc(doc.id).delete().then(function () {
                    console.log("Related articles deleted");
                  });
                } //deleting that topic card


                firestore.collection(collectionName).doc(id).delete().then(function () {
                  console.log("deleted");
                });
              });
              _context.next = 26;
              break;

            case 14:
              if (!(collectionName === "Specialities")) {
                _context.next = 26;
                break;
              }

              console.log("step 1");
              _context.next = 18;
              return firestore.collection("Articles").get();

            case 18:
              ArticlesSnapshot = _context.sent;
              console.log(id);
              ArticlesSnapshot.docs.map(function (doc) {
                var item = doc.data(); // console.log(item);

                if (item.SpecialityId === id) {
                  console.log("step 2");
                  firestore.collection("Articles").doc(doc.id).delete().then(function () {
                    console.log("articles deleted of this speciality");
                  });
                }
              });
              _context.next = 23;
              return firestore.collection("TopicNames").get();

            case 23:
              TopicNamesSnapshot = _context.sent;
              TopicNamesSnapshot.docs.map(function (record) {
                var TopicItem = record.data();

                if (TopicItem.SpecialityId === id) {
                  firestore.collection("TopicNames").doc(record.id).delete().then(function () {
                    console.log("deleted related topic Names");
                  });
                }
              });
              firestore.collection(collectionName).doc(id).delete().then(function () {
                console.log("deleted");
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.Delete = Delete;