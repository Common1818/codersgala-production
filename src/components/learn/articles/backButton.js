import React from "react";
import "../css/backButton.css";

const BackButton = () => {
  return (
    <div class="back-button">
      <button class="-bg-yellow">
        <span>Back to</span>
        <span>All Articles</span>

        <div class="arrowPacman">
          <div class="arrowPacman-clip">
            <svg
              width="14"
              height="14"
              viewBox="0 0 32 32"
              class="icon icon-arrow-left"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z" />
            </svg>

            <svg
              width="14"
              height="14"
              viewBox="0 0 32 32"
              class="icon icon-arrow-left"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default BackButton;
