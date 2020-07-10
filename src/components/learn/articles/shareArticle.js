import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import $ from "jquery";
import "./css/shareArticle.css";

const ShareArticle = ({ NId, url }) => {
  const nnid = NId.replace(/\s/g, "-");
  const value = "https://codersgala.com/WebDevelopment/read/" + nnid;
  console.log(value);

  const [copied, setCopied] = useState(false);

  function actionToggle() {
    var action = $(".action");
    action.toggleClass("active");
  }

  return (
    <>
      <div class="action" onClick={actionToggle}>
        <span>
          <img
            style={{ width: "25px" }}
            src="https://www.svgrepo.com/show/19199/share.svg"
            alt=""
          />
        </span>
        <ul>
          <li>
            {copied ? (
              <article className="copyto">Copied to </article>
            ) : (
              <article className="copyto">Copy to</article>
            )}
            <CopyToClipboard
              onClick={() => console.log(value)}
              text={value}
              onCopy={() => setCopied(true)}
            >
              <img
                alt={"copy link of " + NId}
                style={{ width: "25px", marginLeft: "20px" }}
                src="https://www.svgrepo.com/show/30388/clipboard.svg"
                alt=""
              />
            </CopyToClipboard>
          </li>

          <li>
            <a
              className="whatsapp-icon"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on "${NId}",Check it out : ${url}`}
              target="_blank"
            >
              Share on
              <img
                style={{ width: "25px", marginLeft: "20px" }}
                src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg"
                alt={"share " + NId + " on Whatsapp"}
              />
            </a>
          </li>

          <li>
            <a
              className="mail-icon"
              href={`mailto:?Subject=${
                "Article on " + NId
              }&Body=Hey look i just found out this Amazing article on "${NId}",Check it out : ${url}`}
              target="_top"
              rel="nofollow"
            >
              Share on
              <img
                style={{ width: "25px", marginLeft: "20px" }}
                className="share-image"
                src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg"
                alt={"share " + NId + " on Gmail"}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShareArticle;
