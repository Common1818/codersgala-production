/* eslint-disable */
import React, { useState, useContext } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Editor from "../../editor/editor";
import { addArticle } from "../../../crudFunctions/articleFunctions";
import $ from "jquery";
import { ArticlesContext } from "../../../contexts/articleContext";

const AddArticle = (props) => {
  const [ArticleContent, setArticleContent] = useState("");
  const [ArticleName, setArticleName] = useState("");
  const [keywords, setArticleKeywords] = useState("");
  const [Loading, setLoading] = useState(false);
  const { SpecialityId, id } = props.match.params;

  const goToTop = () => {
    $("html, body").animate({ scrollTop: 10 }, 600);
  };

  const { dispatch } = useContext(ArticlesContext);
  const { articles } = useContext(ArticlesContext);

  const message = articles && articles.message;
  const color = articles && articles.color;
  const complete = articles && articles.complete;

  const handleEditor = (html) => {
    setArticleContent(html);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);

    addArticle(
      {
        ArticleContent,
        ArticleName,
        SpecialityId: SpecialityId,
        TopicId: id,
        keywords,
      },
      dispatch
    );
  };

  if (complete) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  // console.log(this.props);

  return (
    <Row className="full-view-article p-2">
      <div className="share-icons"></div>

      <Col sm={1}></Col>

      <Col id="top" sm={10}>
        <div className="">
          <div className="">
            <h4 className="" id="">
              Add a Article
            </h4>
          </div>

          <div className="modal-body content">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="ArticleName"
                  placeholder="Article Name"
                  className="form-control"
                  onChange={(e) => {
                    setArticleName(e.target.value);
                  }}
                />
                <br />

                <input
                  type="text"
                  id="keywords"
                  placeholder="Article Description"
                  className="form-control"
                  onChange={(e) => {
                    setArticleKeywords(e.target.value);
                  }}
                />

                <br />

                <Editor handleEditor={handleEditor} defaultValue="" />

                <div className="add-article-button">
                  <button
                    className="btn btn-outline-primary m-3"
                    onClick={handleAdd}
                  >
                    Add
                  </button>
                  {Loading && !complete ? (
                    <div className="text-center">
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    <div className={"text-center " + "text-" + color}>
                      {message}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <a href="#">
          <i
            onClick={goToTop}
            rel="nofollow"
            id="go-to-top"
            className=" top-icon fas fa-angle-double-up"
          ></i>
        </a>
      </Col>

      <Col sm={1}></Col>
    </Row>
  );
};

export default AddArticle;
