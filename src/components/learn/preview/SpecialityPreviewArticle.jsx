import React from "react";
import { Link } from "react-router-dom";

const SpecialityPreviewArticle = ({
  Specialities,
  requiredSpeciality,
  articles,
}) => {
  console.log(requiredSpeciality);
  return (
    <div className="card">
      <h1 className="material-icons card-header ">
        Read This before You start...
      </h1>
      <hr />
      {articles &&
        articles.map((item) => {
          if (item.ArticleName === requiredSpeciality + "Intro") {
            return (
              <div className="preview-card">
                <div className="ql-snow" key={item.id}>
                  <div
                    key={item.id}
                    className="card-no-body ql-editor"
                    dangerouslySetInnerHTML={{
                      __html: item.ArticleContent,
                    }}
                  ></div>
                  <div>
                    <Link
                      to={
                        "/" +
                        requiredSpeciality +
                        "/" +
                        "read" +
                        "/" +
                        item.ArticleName.replace(/\s/g, "-")
                      }
                    >
                      <h2 className="link">Read More.....</h2>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default SpecialityPreviewArticle;
