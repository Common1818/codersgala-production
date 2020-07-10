/* eslint-disable */
import React from "react";
import Editor from "../../editor/editor";
import { SpecialityContext } from "../../../contexts/specialityContext";
import { Spinner } from "react-bootstrap";
import Preloader from "../../Preloader/preloader";
import { UpdateCard } from "../../../crudFunctions/specialityFunctions";

class EditCard extends React.Component {
  state = {
    Loading: false,
  };
  static contextType = SpecialityContext;

  render() {
    const { articles } = this.props;
    const { specialities, dispatch } = this.context;
    const specialityArray = specialities && specialities.specialities;
    const { specailaityId } = this.props.match.params;

    const message = specialities && specialities.message;
    const color = specialities && specialities.color;
    const complete = specialities && specialities.loaded;

    var url, name, article;
    console.log(articles);
    var lastArticle;
    articles &&
      articles.map((article) => {
        if (article.ArticleName === "WebDevelopmentIntro") {
          lastArticle = article;
        }
      });
    console.log(lastArticle.ArticleContent);

    specialityArray &&
      specialityArray.map((item) => {
        if (item.id === specailaityId) {
          url = item.imageUrl;
          name = item.Name;
          article = item.ArticleContent;
        }
        return null;
      });

    const handleSubmit = (e) => {
      e.preventDefault();
      UpdateCard(
        { ...this.state, id: specailaityId, articleId: lastArticle.id },
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
        {specialityArray ? (
          <form>
            <div className="form-group">
              <input
                type="text"
                id="Name"
                onChange={handleChange}
                defaultValue={name && name}
                placeholder="Topic Name"
                className="form-control"
              />
              <br />
              <input
                type="text"
                id="imageUrl"
                defaultValue={url && url}
                onChange={handleChange}
                placeholder="Image URL"
                className="form-control"
              />
              <br />

              <div className="ql-snow">
                {" "}
                <Editor
                  defaultValue={lastArticle.ArticleContent}
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
                {this.state.Loading && !complete ? (
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
        ) : (
          <Preloader />
        )}
      </div>
    );
  }
}

export default EditCard;
