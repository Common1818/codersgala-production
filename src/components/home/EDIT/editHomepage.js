/* eslint-disable */
import React from "react";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
// import $ from "jquery";
import { HomeContext } from "../../../contexts/homeContext";
import Preloader from "../../Preloader/preloader";
import { UpdateHome } from "../../../crudFunctions/homeFunctions";

class EditHomepage extends React.Component {
  state = {
    Loading: false,
  };

  static contextType = HomeContext;

  render() {
    console.log(this.context);
    const { home, dispatch } = this.context;
    const homeArray = home && home.home;
    const left = homeArray && homeArray[0].left;
    const middle = homeArray && homeArray[0].middle;
    const right = homeArray && homeArray[0].right;

    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ Loading: true });
      UpdateHome(this.state, dispatch);
    };

    const message = home && home.message;
    const color = home && home.color;
    const complete = home && home.homeLoaded;

    // const [Newleft, setNewleft] = useState("");
    // const [Newmiddle, setNewmiddle] = useState("");
    // const [Newright, setNewright] = useState("");

    // const handleSubmit = async () => {
    //   setNewleft(left);
    //   console.log(Newleft, Newmiddle, Newright);
    // };

    return (
      <div className="home-container">
        {homeArray ? (
          <form>
            <section className="hero">
              <div className="hero-box-container">
                <div className="hero-box">
                  <span className="hero-box__circle hero-box__circle--blue"></span>
                  <h2 className="hero-box__title">What is Coders Gala?</h2>
                  <p className="hero-box__body">
                    <textarea
                      defaultValue={left && left}
                      id="left"
                      onChange={(e) => {
                        this.setState({ [e.target.id]: e.target.value });
                      }}
                      style={{ width: "100%", height: "200px" }}
                    ></textarea>
                  </p>
                </div>
                <div className="hero-box">
                  <span className="hero-box__circle hero-box__circle--green"></span>
                  <h2 className="hero-box__title">Who are We ?</h2>
                  <p className="hero-box__body">
                    <textarea
                      defaultValue={middle && middle}
                      id="middle"
                      onChange={(e) => {
                        this.setState({ [e.target.id]: e.target.value });
                      }}
                      style={{ width: "100%", height: "200px" }}
                    ></textarea>
                  </p>
                </div>
                <div className="hero-box">
                  <span className="hero-box__circle hero-box__circle--orange"></span>
                  <h2 className="hero-box__title">Start Learning ..</h2>
                  <p className="hero-box__body">
                    <textarea
                      defaultValue={right && right}
                      onChange={(e) => {
                        this.setState({ [e.target.id]: e.target.value });
                      }}
                      id="right"
                      style={{ width: "100%", height: "200px" }}
                    ></textarea>
                  </p>
                </div>
              </div>
            </section>
            <div className="text-center">
              <Button onClick={handleSubmit}>Update</Button>
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
          </form>
        ) : (
          <Preloader />
        )}
      </div>
    );
  }
}

export default EditHomepage;
