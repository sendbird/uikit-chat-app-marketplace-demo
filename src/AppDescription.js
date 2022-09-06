import React, { useState } from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
import Marketplace from "./Marketplace";
import ProductPage from "./ProductPage";

function AppDescription({ reset, start }) {
  const [showProductPage, setShowProductPage] = useState(false);
  const [itemSelected, setItem] = useState({});

  return (
    <div className="app-description">
      {/* <h3 className="h3">A unified experience</h3>
      <p>
        Users wouldn’t leave your app if they didn’t have to. Why send them
        hunting across SMS, email, and messenger apps to track down messages?
        The rich experience cards seen here are sent by a server process,
        usually connected to a customers backend, and use a simple markdown
        design
      </p>
      <div className="links-container">
        <a
          href="https://www.notion.so/UIKit-App-Platform-e8eb9cc257b94319aa3b04f28ad11b38"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Design document
        </a>
        <a
          href="https://www.notion.so/sendbird/Sendbird-UIKit-Chat-App-Simple-Tutorial-91a3b1b4d2374a239cf61fb7bf67f3cb"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Tutorial
        </a>
        <a
          href="https://github.com/sendbird/sendbird-uikit-app-samples"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Sample code
        </a>
      </div>
      <div className="inbox-bullets">
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-community-conversations@2x.png"
              className="lazyloaded"
              data-was-processed="true"
              alt="marketplace-icon"
            />
          </div>
          <h5 className="h7">Marketplace</h5>
          <h6 className="example-description">
            Share a product detail card with the customer
          </h6> */}
          {/* <button
            className="send-example-message-button"
            onClick={() => {
              start("https://chatsamples.com/marketplace/start", "marketplace");
            }}
          >
            Click to send marketplace message
          </button> */}
          {/* <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/marketplace/sendbird.js"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="inbox-bullet" onClick={reset}>
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-community-conversations@2x.png"
              className="lazyloaded"
              data-was-processed="true"
              alt="marketplace-icon"
            />
          </div>
          <h5 className="h7">Reset conversation</h5>
        </div>
      </div> */}

      {showProductPage ? (
        <ProductPage itemSelected={itemSelected} start={start} setShowProductPage={setShowProductPage}/>
      ) : (
        <Marketplace setShowProductPage={setShowProductPage} setItem={setItem} />
      )}
    </div>
  );
}

export default withSendBird(AppDescription);
