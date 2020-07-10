/* eslint-disable */
import React from "react";
import Editor from "../../editor/editor";
import { SpecialityContext } from "../../../contexts/specialityContext";
import Preloader from "../../Preloader/preloader";
import { AddCardFunction } from "../../../crudFunctions/specialityFunctions";

class AddCard extends React.Component {
  static contextType = SpecialityContext;

  render() {
    const { specialities, dispatch } = this.context;
    const specialityArray = specialities && specialities.specialities;
    // const { specailaityId } = this.props.match.params;

    const message = specialities && specialities.message;
    const color = specialities && specialities.color;

    const handleSubmit = (e) => {
      e.preventDefault();
      AddCardFunction(this.state, dispatch);
      // UpdateCard({ ...this.state, id: specailaityId }, dispatch);
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
          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                id="Name"
                required
                onChange={handleChange}
                placeholder="Speciality Name"
                className="form-control"
              />
              <br />
              <input
                required
                type="text"
                id="imageUrl"
                onChange={handleChange}
                placeholder="Image URL"
                className="form-control"
              />
              <br />
              <input
                required
                type="text"
                id="alt"
                onChange={handleChange}
                placeholder="Image alt text"
                className="form-control"
              />
              <br />

              <div className="ql-snow">
                <Editor
                  required
                  className="ql-editor"
                  handleEditor={handleEditor}
                  defaultValue=""
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

                <div className="text-center">
                  <div className={"text-center " + "text-" + color}>
                    {message && message}
                  </div>
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

export default AddCard;

//  {
//    this.state.Loading && !complete ? (
//      <div className="text-center">
//        <Spinner animation="border" role="status">
//          <span className="sr-only">Loading...</span>
//        </Spinner>
//      </div>
//    ) : (
//      <div className={"text-center " + "text-" + color}>{message}</div>
//    );
//  }
