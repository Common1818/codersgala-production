import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const PreviewArticle = ({ TopicNames, SelectedArticle, specialityName }) => {
  const slicedArticle = SelectedArticle.ArticleName;
  console.log(slicedArticle.replace(/\s/g, "-"));
  return (
    <div className="card">
      <div>
        {TopicNames &&
          SelectedArticle &&
          TopicNames.map((item) => {
            if (item.id === SelectedArticle.TopicId) {
              return (
                <div key={item.id}>
                  <h1 className="material-icons  card-header">
                    {SelectedArticle.ArticleName}
                    <br />
                    <div>
                      <h3 className="float-right">{item.Name}</h3>
                    </div>
                  </h1>
                  <hr />
                  <div className="preview-card">
                    <div className="ql-snow">
                      <div
                        className="card-no-body ql-editor "
                        dangerouslySetInnerHTML={{
                          __html: SelectedArticle.ArticleContent,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div>
        <Link
          onClick={() => {
            $("html, body").animate({ scrollTop: 10 }, 200);
          }}
          to={
            "/" +
            specialityName +
            "/" +
            "read" +
            "/" +
            slicedArticle.replace(/\s/g, "-")
          }
        >
          <h2 className="link">Read More.....</h2>
        </Link>
      </div>
    </div>
  );
};

export default PreviewArticle;
