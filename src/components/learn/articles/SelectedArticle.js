/* eslint-disable */
import React, { useState, useContext, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ArticlesContext } from "../../../contexts/articleContext";
import { TopicsContext } from "../../../contexts/topicContext";
import { AuthContext } from "../../../contexts/authContext";

import "./css/article.css";
import "react-quill/dist/quill.snow.css";
import $ from "jquery";
import Footer from "../../layout/Footer/Footer";
import ShareArticle from "./shareArticle";

const SelectedArticle = (props) => {
  const articles = props.articles;
  var value;

  if (typeof window !== "undefined") {
    const [value, setValue] = useState(window.location.href);
  }

  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const [locked, setLocked] = useState(false);

  // const { articles } = useContext(ArticlesContext);
  const { authState, authData } = useContext(AuthContext);
  const { topics } = useContext(TopicsContext);

  // const Articles = articles && articles.articles;
  const { specialityId, topicId, Id } = props.match.params;
  console.log(Id);
  console.log(Id.replace(/-/g, " "));
  const NId = Id.replace(/-/g, " ");
  var url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  const goToTop = () => {
    $("html, body").animate({ scrollTop: 10 }, 200);
  };

  topics.topics &&
    authData.userProfile &&
    topics.topics.map((item) => {
      if (item.id == topicId && item.locked) {
        setLocked(true);
        authState.uid == null ? (
          <Redirect to="/signup" />
        ) : (
          authData.userProfile.UnlockedTopicId.map((idItem) => {
            if (idItem == topicId) setShow(true);
          })
        );
      }
    });

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     $(window).scroll(() => {
  //       console.log("scroll");
  //     });
  //   }
  // });

  // Add React Helmet Regardless of locked since its already taken care of

  return !locked || (locked && show) ? (
    <div>
      <div className="selected-article">
        {articles &&
          articles.map((article) => {
            if (article.ArticleName === NId) {
              return (
                <div>
                  <Helmet>
                    <title>{article.ArticleName}</title>
                    <meta name="description" content={article.keywords} />
                    <meta name="robots" content="index follow" />
                  </Helmet>
                  <Row key={article.id} className="full-view-article p-2">
                    <Col sm={2}>
                      {/* ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br />
                    ads here
                    <br /> */}
                    </Col>

                    <Col id="top" style={{ padding: "0px" }} sm={8}>
                      <div className="ql-snow">
                        <div
                          className="full-article ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: article.ArticleContent,
                          }}
                        ></div>
                      </div>
                      <a rel="nofollow" href="#">
                        <img
                          onClick={goToTop}
                          className="top-icon"
                          id="go-to-top"
                          style={{ width: "30px" }}
                          src="https://www.svgrepo.com/show/247787/up-arrow-upload.svg"
                          alt={"Go on Top of " + article.ArticleName}
                        />
                      </a>
                    </Col>

                    <Col className="full-page ad" sm={2}>
                      <img
                        src="https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/66572/1590680720-CSS_arcade_600x600.jpg"
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>
              );
            }
            return null;
          })}
      </div>
      <Link to={"/learn/" + specialityId}>
        <img
          className="back-btn"
          src="https://www.svgrepo.com/show/50213/back.svg"
          alt="back button"
        />
      </Link>
      <ShareArticle NId={NId} url={url} />
      <Footer />
    </div>
  ) : (
    <Redirect to="/signup" />
  );
};

export default SelectedArticle;
