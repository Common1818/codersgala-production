import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <aside className="profile-card">
      <header>
        <img src="" alt="" />
        <h1>{data.name}</h1>
        <h2>Hello!</h2>
      </header>
      <div className="profile-bio">
        <p>{data.bio}</p>
        <ul className="social-icons list-unstyled list-inline">
          <li>
            <a target="__blank" href={data.portfolioUrl}>
              <img
                style={{ width: "25px" }}
                src="https://www.svgrepo.com/show/188990/browser-website.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a target="__blank" href={data.instaUrl}>
              <img
                style={{ width: "25px" }}
                src="https://www.svgrepo.com/show/111199/instagram.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a target="__blank" href={data.twitterUrl}>
              <img
                style={{ width: "25px" }}
                src="https://www.svgrepo.com/show/183608/twitter.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a target="__blank" href={data.githubUrl}>
              <img
                style={{ width: "25px" }}
                src="https://www.svgrepo.com/show/217753/github.svg"
                className="github"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProfileCard;
