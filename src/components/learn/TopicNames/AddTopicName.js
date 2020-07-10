/* eslint-disable */
import React, { useState, useContext } from "react";
import { TopicsContext } from "../../../contexts/topicContext";
import { Spinner } from "react-bootstrap";
import { AddTopic } from "../../../crudFunctions/topicFunctions";
import $ from "jquery";

const AddTopicName = (props) => {
  const [locked, setLocked] = useState(true);
  const [Name, setName] = useState("");
  const [Loading, setLoading] = useState(false);

  const { dispatch } = useContext(TopicsContext);
  const { topics } = useContext(TopicsContext);

  const message = topics && topics.message;
  const color = topics && topics.color;
  const complete = topics && topics.complete;
  // console.log(complete);

  if (complete) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    AddTopic({ Name, locked, SpecialityId: props.SpecialityId }, dispatch);
    // this.props.AddTopicName("TopicNames", {
    //   ...this.state,
    //   SpecialityId: props.SpecialityId,
    // });
  };

  return (
    <div className="container m-0 p-0 ">
      <button
        type="button"
        className="btn button-outline btn-lg btn-block"
        data-toggle="modal"
        data-target="#exampleModal12"
      >
        <strong>Add Topic Name</strong>
      </button>

      <div
        className="modal fade"
        id="exampleModal12"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content newsletter">
            <div className="modal-header">
              <h4 className="modal-title title" id="exampleModalLabel">
                Add a Topic Name
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body content">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    id="Name"
                    placeholder="Name of the topic"
                    className="form-control"
                    onChange={handleInput}
                  />
                  <br />
                  <div className="add-topic-modal lock-container">
                    <span
                      onClick={() => {
                        $(".add-topic-modal .lock").toggleClass("unlocked");
                        setLocked(!locked);
                      }}
                      className="lock"
                    ></span>
                  </div>
                  <button
                    className="btn button-outline float-right m-3"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTopicName;
