import React, { useContext, useState } from "react";

import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { Accordion, Row, Col, Button } from "react-bootstrap";

import PreviewArticle from "./PreviewArticle";
import SpecialityPreviewArticle from "./SpecialityPreviewArticle";
import ReferralArticle from "../../referralSystem/referralArticle";
import DisplayTopicNames from "../TopicNames/DisplayTopicNames";
import { ArticlesContext } from "../../../contexts/articleContext";
import { SpecialityContext } from "../../../contexts/specialityContext";
import { TopicsContext } from "../../../contexts/topicContext";
import { AuthContext } from "../../../contexts/authContext";
import { ModeContext } from "../../../contexts/modeContext";

import Footer from "../../layout/Footer/Footer";
import ShareIcon from "./shareIcon";
import Preloader from "../../Preloader/preloader";

import $ from "jquery";

const PreviewPage = (props) => {
  const { articles } = useContext(ArticlesContext);
  const { specialities } = useContext(SpecialityContext);
  const { topics } = useContext(TopicsContext);
  const { authData } = useContext(AuthContext);
  //These are here to define the right side of preview page as only 3 type of articles can be seen there referral article, selected article and speciality article
  const [selected, setSelected] = useState(false);
  const [SelectedArticle, setSelectedArticle] = useState();
  const [showReferralArticle, setshowReferralArticle] = useState(false);
  const [referralTopicId, setreferralTopicId] = useState("");

  const topicsData = topics && topics;
  const UnlockComplete = topicsData && topicsData.UnlockComplete;

  if (UnlockComplete) {
    window.location.reload();
  }

  const Articles = articles && articles.articles;
  const TopicNames = topics && topics.topics;
  const Specialities = specialities && specialities.specialities;
  const requiredSpeciality = props.match.params.specialityName;
  const profile = authData && authData.userProfile;
  // const { hasUpdatedProfile } = profile;

  const { mode } = useContext(ModeContext);
  // if (hasUpdatedProfile && hasUpdatedProfile === null)
  //   return <Redirect to="/updateProfile" />;

  //To show the selected article
  const displayArticle = (article) => {
    setSelectedArticle(article);
    setSelected(true);
  };

  //To show referral article
  const referralArticle = (id) => {
    setshowReferralArticle(true);
    setreferralTopicId(id);
    setSelected(false); //When user comes from reading another article this is necessary.
  };

  const hideReferralArticle = () => {
    setshowReferralArticle(false);
    setreferralTopicId("");
    setSelected(false);
  };

  let descriptionString = "";

  TopicNames &&
    TopicNames.map((item) => {
      descriptionString = descriptionString.concat(item.Name + " ");
      return descriptionString;
    });

  const hasUpdatedProfile =
    authData.userProfile && authData.userProfile.hasUpdatedProfile;
  if (hasUpdatedProfile !== undefined && !hasUpdatedProfile)
    return <Redirect to="/completeProfile" />;
  return (
    <div className="topics-ovr-cont">
      <Helmet>
        <title>Coders Gala</title>
        <meta
          name="description"
          content={
            "Learn these Web development topics free" + descriptionString
          }
        />

        <meta name="robots" content="index follow" />
      </Helmet>
      {TopicNames ? (
        <div className="speciality-container">
          <div className="speciality-heading">
            <h2>{requiredSpeciality}</h2>
            <ShareIcon
              displayMode={mode.mode}
              profile={profile}
              specaility={requiredSpeciality}
            />
          </div>
          <Row>
            <Col className="topic-ovr-container" lg={4}>
              {/* Yeh pehla accordian deekhta kyun nahi h desktop mode mein */}
              <Accordion
                defaultActiveKey={window.innerWidth <= 500 ? "1" : "0"}
              >
                <div className="topics-overview">
                  <h3 style={{ fontSize: "1rem" }} className="overview">
                    {window.innerWidth <= 500 ? (
                      <span>In this Module...</span>
                    ) : (
                      <span>Topics Overview</span>
                    )}
                  </h3>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    onClick={() => {
                      $(".arrow-down.overview").toggleClass("down");
                      $(".arrow-down svg.topics-overview-toggle").removeClass(
                        "anim"
                      );
                    }}
                    className="float-right speciality-dropdown overview arrow-down"
                    eventKey="0"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="anim icon icon-chevron-bottom article-dwn topics-overview-toggle fa-angle-down"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
                    </svg>
                  </Accordion.Toggle>
                </div>
                <br />

                <Accordion.Collapse eventKey="0">
                  <div id="specialities" className="Topic-names ">
                    {Specialities &&
                      Specialities.map((item) => {
                        if (item.Name === requiredSpeciality) {
                          return (
                            <div key={item.id}>
                              <br />

                              <DisplayTopicNames
                                displayMode={mode.mode}
                                SpecialityId={item.id}
                                TopicNames={TopicNames}
                                SpecialityName={requiredSpeciality}
                                Articles={Articles}
                                displayArticle={displayArticle}
                                referralArticle={referralArticle}
                              />

                              <br />
                            </div>
                          );
                        }
                        return null;
                      })}
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Col>

            <Col l={8}>
              <div className="card-container ">
                {selected ? (
                  <PreviewArticle
                    specialityName={requiredSpeciality}
                    TopicNames={TopicNames}
                    SelectedArticle={SelectedArticle}
                  />
                ) : showReferralArticle ? (
                  <ReferralArticle
                    topicId={referralTopicId}
                    hideReferralArticle={hideReferralArticle}
                  />
                ) : (
                  <SpecialityPreviewArticle
                    articles={props.articles}
                    Specialities={Specialities}
                    requiredSpeciality={requiredSpeciality}
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
};

export default PreviewPage;
