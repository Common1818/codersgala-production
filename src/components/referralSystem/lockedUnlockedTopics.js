import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const LockedUnlockedTopic = ({ topic, unhideToggle }) => {
  const { authData } = useContext(AuthContext);
  const credentials = authData && authData.userProfile;
  // console.log(authData);
  return (
    <div>
      {topic.locked ? (
        <div>
          {credentials ? (
            credentials.UnlockedTopicId &&
            credentials.UnlockedTopicId.length === 0 ? (
              <div className="float-right" key={topic.id}>
                {/* It is a lock when user first time */}
                <div className="lock-container">
                  <span className="lock" id={topic.id}></span>
                </div>
              </div>
            ) : (
              credentials.UnlockedTopicId &&
              credentials.UnlockedTopicId.map((id, i) => {
                return topic.id === id.id ? (
                  <div
                    className="float-right"
                    key={topic.id + id.id}
                    onClick={unhideToggle(topic.id)}
                  >
                    <div className="lock-container">
                      <span className="unlocked"></span>
                    </div>
                  </div>
                ) : i === credentials.UnlockedTopicId.length - 1 ? (
                  <div className="float-right" key={topic.id + id.id}>
                    <div className="lock-container">
                      <span className="lock" id={topic.id}></span>
                    </div>
                  </div>
                ) : null;
              })
            )
          ) : (
            <div className="float-right" key={topic.id}>
              <div className="lock-container">
                <span className="lock" id={topic.id}></span>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default LockedUnlockedTopic;
