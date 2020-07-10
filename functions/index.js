"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./src/App"));

var functions = _interopRequireWildcard(require("firebase-functions"));

var _specialityContext = _interopRequireDefault(require("./src/contexts/specialityContext"));

var _authContext = _interopRequireDefault(require("./src/contexts/authContext"));

var _topicContext = _interopRequireDefault(require("./src/contexts/topicContext"));

var _articleContext = _interopRequireDefault(require("./src/contexts/articleContext"));

var _homeContext = _interopRequireDefault(require("./src/contexts/homeContext"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _modeContext = _interopRequireDefault(require("./src/contexts/modeContext"));

var _fbConfig = _interopRequireDefault(require("./src/config/fbConfig"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var path = require("path");

var fs = require("fs");

var app = (0, _express.default)();
app.get("**", function (req, res) {
  console.log("working");
  var articlesArray = [];

  var articlesArraySnapshot = _fbConfig.default.firestore().collection("Articles").get().then(function (content) {
    content.docs.map(function (doc) {
      articlesArray.push(_objectSpread({
        id: doc.id
      }, doc.data()));
    });
    return articlesArray;
  }).then(function (articlesArray) {
    var filePath = path.resolve(__dirname, "index.html");
    var index = fs.readFileSync(filePath, "utf8").toString();

    var nhtml = /*#__PURE__*/_react.default.createElement(_authContext.default, null, /*#__PURE__*/_react.default.createElement(_specialityContext.default, null, /*#__PURE__*/_react.default.createElement(_topicContext.default, null, /*#__PURE__*/_react.default.createElement(_articleContext.default, null, /*#__PURE__*/_react.default.createElement(_homeContext.default, null, /*#__PURE__*/_react.default.createElement(_modeContext.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
      context: {},
      location: req.url
    }, /*#__PURE__*/_react.default.createElement(_App.default, {
      articlesArray: articlesArray
    }))))))));

    var html = _server.default.renderToString(nhtml);

    _reactLoadable.default.preloadAll().then(function () {
      var finalHtml = index.replace('<div id="root"></div>', "<div id=\"root\">".concat(html, "</div>")).replace("//script", "window.__INITIAL_DATA__ = \n".concat((0, _serializeJavascript.default)(articlesArray))); // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')

      res.send(finalHtml);
    });
  });
});
var ssrapp = functions.https.onRequest(app); // const functions = require("firebase-functions");

exports.ssrapp = ssrapp;

var nodemailer = require("nodemailer");

var gmailEmail = "marketingacad.help@gmail.com";
var gmailPassword = "abcd9876";

var admin = require("firebase-admin");

admin.initializeApp();
console.log("whatever");
exports.notification = functions.firestore.document("Articles/{articleId}").onCreate( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(snap, context) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            admin.auth().listUsers();

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.addAdminRole = functions.https.onCall(function (data, context) {
  console.log("request recieved");
  console.log(data);
  return admin.auth().getUserByEmail(data.email).then(function (user) {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    });
  }).then(function () {
    console.log("it is working");
    return {
      message: "it is working"
    };
  }).catch(function (err) {
    return err;
  });
});
exports.sendEmail = functions.https.onCall( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(data) {
    var mailTransport, mailOptions;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("trying to send email");
            mailTransport = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: gmailEmail,
                pass: gmailPassword
              }
            });
            mailOptions = {
              from: '"DoItNow" <noreply@firebase.com>',
              to: data.email
            };
            mailOptions.subject = data.subject;
            mailOptions.text = data.text;
            _context2.prev = 5;
            _context2.next = 8;
            return mailTransport.sendMail(mailOptions);

          case 8:
            return _context2.abrupt("return", {
              errorCode: 200
            });

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](5);
            console.error("There was an error while sending the email", _context2.t0);
            return _context2.abrupt("return", {
              errorCode: 100
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 11]]);
  }));

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());
exports.userList = functions.https.onCall(function (nextPageToken) {
  console.log("req recieved to retreive user");
  return admin.auth().listUsers().then(function (listUserResult) {
    console.log("its time to work");
    return {
      users: listUserResult.users,
      message: "Users Fetched successfully"
    };
  }).catch(function (err) {
    console.log(err);
    return {
      err: errr,
      message: "Error Fetching users"
    };
  });
});
exports.addAdminRole = functions.https.onCall(function (email) {
  //get user and add custom claims (admin)
  console.log("request recieved");
  console.log(email);
  return admin.auth().getUserByEmail(email).then(function (user) {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    });
  }).then(function () {
    console.log("it is working");
    return {
      message: "Made Admin successfully"
    };
  }).catch(function (err) {
    return {
      err: err,
      message: "Error making admin"
    };
  });
});
exports.blockUser = functions.https.onCall(function (uid) {
  console.log("req recieved to disable user");
  return admin.auth().updateUser(uid, {
    disabled: true
  }).then(function (userRecord) {
    console.log(userRecord);
    return {
      userRecord: userRecord,
      message: "Blocked Succesfully !!!"
    };
  }).catch(function (err) {
    console.log(err);
    return {
      userRecord: userRecord,
      message: "Not Blocked !!! ERROR !!!!"
    };
  });
});
exports.unblockUser = functions.https.onCall(function (uid) {
  console.log("req recieved to enable user");
  return admin.auth().updateUser(uid, {
    disabled: false
  }).then(function (userRecord) {
    console.log(userRecord);
    return {
      userRecord: userRecord,
      message: "Unblocked Successfully "
    };
  }).catch(function (err) {
    console.log(err);
    return {
      userRecord: userRecord,
      message: "Not Unblocked !!! ERROR !!!"
    };
  });
});
exports.deleteUser = functions.https.onCall(function (uid) {
  console.log("request recieved for deleting the user");
  return admin.auth().deleteUser(uid).then(function () {
    return {
      message: "Deleted Successfully "
    };
  }).catch(function (err) {
    console.log(err);
    return {
      message: "Not Deleted !!! ERROR !!!"
    };
  });
});