"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _PreviewArticle = _interopRequireDefault(require("./PreviewArticle"));

var _SpecialityPreviewArticle = _interopRequireDefault(require("./SpecialityPreviewArticle"));

var _referralArticle = _interopRequireDefault(require("../../referralSystem/referralArticle"));

var _DisplayTopicNames = _interopRequireDefault(require("../TopicNames/DisplayTopicNames"));

var _articleContext = require("../../../contexts/articleContext");

var _specialityContext = require("../../../contexts/specialityContext");

var _topicContext = require("../../../contexts/topicContext");

var _authContext = require("../../../contexts/authContext");

var _modeContext = require("../../../contexts/modeContext");

var _Footer = _interopRequireDefault(require("../../layout/Footer/Footer"));

var _shareIcon = _interopRequireDefault(require("./shareIcon"));

var _preloader = _interopRequireDefault(require("../../Preloader/preloader"));

var _jquery = _interopRequireDefault(require("jquery"));

var PreviewPage = function PreviewPage(props) {
  var _React$createElement;

  var _useContext = (0, _react.useContext)(_articleContext.ArticlesContext),
      articles = _useContext.articles;

  var _useContext2 = (0, _react.useContext)(_specialityContext.SpecialityContext),
      specialities = _useContext2.specialities;

  var _useContext3 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext3.topics;

  var _useContext4 = (0, _react.useContext)(_authContext.AuthContext),
      authData = _useContext4.authData; //These are here to define the right side of preview page as only 3 type of articles can be seen there referral article, selected article and speciality article


  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      SelectedArticle = _useState4[0],
      setSelectedArticle = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showReferralArticle = _useState6[0],
      setshowReferralArticle = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      referralTopicId = _useState8[0],
      setreferralTopicId = _useState8[1];

  var topicsData = topics && topics;
  var UnlockComplete = topicsData && topicsData.UnlockComplete;

  if (UnlockComplete) {
    window.location.reload();
  }

  var Articles = articles && articles.articles;
  var TopicNames = topics && topics.topics;
  var Specialities = specialities && specialities.specialities;
  var requiredSpeciality = props.match.params.specialityName;
  var profile = authData && authData.userProfile; // const { hasUpdatedProfile } = profile;

  var _useContext5 = (0, _react.useContext)(_modeContext.ModeContext),
      mode = _useContext5.mode; // if (hasUpdatedProfile && hasUpdatedProfile === null)
  //   return <Redirect to="/updateProfile" />;
  //To show the selected article


  var displayArticle = function displayArticle(article) {
    setSelectedArticle(article);
    setSelected(true);
  }; //To show referral article


  var referralArticle = function referralArticle(id) {
    setshowReferralArticle(true);
    setreferralTopicId(id);
    setSelected(false); //When user comes from reading another article this is necessary.
  };

  var hideReferralArticle = function hideReferralArticle() {
    setshowReferralArticle(false);
    setreferralTopicId("");
    setSelected(false);
  };

  var descriptionString = "";
  TopicNames && TopicNames.map(function (item) {
    descriptionString = descriptionString.concat(item.Name + " ");
    return descriptionString;
  });
  var hasUpdatedProfile = authData.userProfile && authData.userProfile.hasUpdatedProfile;
  if (hasUpdatedProfile !== undefined && !hasUpdatedProfile) return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/completeProfile"
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "topics-ovr-cont"
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "Coders Gala"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Learn these Web development topics free" + descriptionString
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "robots",
    content: "index follow"
  })), TopicNames ? /*#__PURE__*/_react.default.createElement("div", {
    className: "speciality-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "speciality-heading"
  }, /*#__PURE__*/_react.default.createElement("h2", null, requiredSpeciality), /*#__PURE__*/_react.default.createElement(_shareIcon.default, {
    displayMode: mode.mode,
    profile: profile,
    specaility: requiredSpeciality
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "topic-ovr-container",
    lg: 4
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, {
    defaultActiveKey: window.innerWidth <= 500 ? "1" : "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "topics-overview"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      fontSize: "1rem"
    },
    className: "overview"
  }, window.innerWidth <= 500 ? /*#__PURE__*/_react.default.createElement("span", null, "In this Module...") : /*#__PURE__*/_react.default.createElement("span", null, "Topics Overview")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
    as: _reactBootstrap.Button,
    variant: "link",
    onClick: function onClick() {
      (0, _jquery.default)(".arrow-down.overview").toggleClass("down");
      (0, _jquery.default)(".arrow-down svg.topics-overview-toggle").removeClass("anim");
    },
    className: "float-right speciality-dropdown overview arrow-down",
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement("svg", (_React$createElement = {
    viewBox: "0 0 32 32",
    className: "anim icon icon-chevron-bottom article-dwn topics-overview-toggle fa-angle-down"
  }, (0, _defineProperty2.default)(_React$createElement, "viewBox", "0 0 32 32"), (0, _defineProperty2.default)(_React$createElement, "aria-hidden", "true"), _React$createElement), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
  })))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "specialities",
    className: "Topic-names "
  }, Specialities && Specialities.map(function (item) {
    if (item.Name === requiredSpeciality) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: item.id
      }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_DisplayTopicNames.default, {
        displayMode: mode.mode,
        SpecialityId: item.id,
        TopicNames: TopicNames,
        SpecialityName: requiredSpeciality,
        Articles: Articles,
        displayArticle: displayArticle,
        referralArticle: referralArticle
      }), /*#__PURE__*/_react.default.createElement("br", null));
    }

    return null;
  }))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    l: 8
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-container "
  }, selected ? /*#__PURE__*/_react.default.createElement(_PreviewArticle.default, {
    specialityName: requiredSpeciality,
    TopicNames: TopicNames,
    SelectedArticle: SelectedArticle
  }) : showReferralArticle ? /*#__PURE__*/_react.default.createElement(_referralArticle.default, {
    topicId: referralTopicId,
    hideReferralArticle: hideReferralArticle
  }) : /*#__PURE__*/_react.default.createElement(_SpecialityPreviewArticle.default, {
    articles: props.articles,
    Specialities: Specialities,
    requiredSpeciality: requiredSpeciality
  }))))) : /*#__PURE__*/_react.default.createElement(_preloader.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

var _default = PreviewPage;
exports.default = _default;