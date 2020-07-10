import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { unlockTopic } from "../../crudFunctions/referralFunctions";
import { AuthContext } from "../../contexts/authContext";
import { TopicsContext } from "../../contexts/topicContext";

import $ from "jquery";

const ReferralArticle = ({ topicId, hideReferralArticle }) => {
  const { authData, authState } = useContext(AuthContext);
  const { dispatch } = useContext(TopicsContext);
  const credentials = authData && authData.userProfile;
  const uid = authState && authState.uid;
  const runFunctions = () => {
    $(`.lock#${topicId}`).toggleClass("unlocked");
    unlockTopic(topicId, uid, dispatch);
    hideReferralArticle();
  };

  return (
    <div className="card">
      <h1 className="material-icons card-header">Referral Article</h1>
      <div className="card-no-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolorum
        architecto optio earum. Architecto dolor ullam mollitia atque natus? Qui
        velit nesciunt optio perspiciatis, blanditiis harum vero tempore
        voluptates quae quod beatae sint iste assumenda, vel dicta,
        necessitatibus voluptatibus molest
        <hr />
        <div>
          {uid ? (
            credentials ? (
              <div>
                <div>
                  <div>
                    <span>
                      <b>Your refer code is : </b>
                      {credentials.referCode}
                    </span>
                  </div>
                  <span>
                    <b>Your refer Link is: </b>
                    <Link to={"/signup/" + credentials.referCode}>
                      http://localhost:3000/signup/{credentials.referCode}
                    </Link>
                    {/* Add a Copying button here */}
                  </span>
                  <div>
                    {credentials.points > 0 ? (
                      <Button varient="primary" onClick={runFunctions}>
                        Unlock the article
                      </Button>
                    ) : (
                      <Button varient="primary" disabled>
                        Unlock the article
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : null
          ) : (
            <div>
              <span>
                <b>
                  Sign up to get your refer code then start referring and earn
                  points
                </b>
                <Link to={"/signup"} className="btn btn-primary">
                  Sign Up
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralArticle;
