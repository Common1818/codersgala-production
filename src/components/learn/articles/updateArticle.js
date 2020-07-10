/* eslint-disable */
import React from "react";
import Editor from "../../editor/editor";
import { ArticlesContext } from "../../../contexts/articleContext";

import Preloader from "../../Preloader/preloader";
import { UpdateArticleFunction } from "../../../crudFunctions/articleFunctions";

class UpdateArticle extends React.Component {
  state = {};
  static contextType = ArticlesContext;

  render() {
    const { articles, dispatch } = this.context;
    const articleArray = articles && articles.articles;
    const { SpecialityId, TopicId, ArticleId } = this.props.match.params;

    var heading, content;

    const message = articles && articles.message;
    const color = articles && articles.color;
    // const complete = articles && articles.loaded;

    articleArray &&
      articleArray.map((article) => {
        if (article.id === ArticleId) {
          content = article.ArticleContent;
          heading = article.ArticleName;
        }
        return null;
      });

    const handleSubmit = (e) => {
      e.preventDefault();
      UpdateArticleFunction(
        { ...this.state, SpecialityId, TopicId },
        ArticleId,
        dispatch
      );
    };

    const handleEditor = (html) => {
      this.setState({
        ArticleContent: html,
      });
    };

    const handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };

    return (
      <div className="container mt-4">
        {articleArray ? (
          <form>
            <div className="form-group">
              <input
                type="text"
                id="ArticleName"
                defaultValue={heading}
                onChange={handleChange}
                placeholder="Topic Name"
                className="form-control"
              />
              <br />

              <div className="ql-snow">
                {" "}
                <Editor
                  defaultValue={content}
                  className="ql-editor"
                  handleEditor={handleEditor}
                />
              </div>

              <div className="add-article-button">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-outline-primary m-3"
                >
                  Add
                </button>

                <div className={"text-center " + "text-" + color}>
                  {message && message}
                </div>
              </div>
            </div>
          </form>
        ) : (
          <Preloader />
        )}
      </div>
    );
  }
}

export default UpdateArticle;
