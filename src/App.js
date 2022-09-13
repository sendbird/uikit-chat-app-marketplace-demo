import React, { useState } from "react";
import Sendbird from "./setupUser";
import { APP_ID, NICKNAME } from './constants';
import "./styles.css";
import AppDescription from "./AppDescription";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import Marketplace from "./Marketplace";
import ProductPage from "./ProductPage";

export default function App() {
  const [user, setUser] = React.useState();
  const [channelUrls, setChannelUrls] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [showProductPage, setShowProductPage] = useState(false);
  const [itemSelected, setItem] = useState({});
  const sendbird = new Sendbird(APP_ID);
  React.useEffect(() => {
    const setup = async () => {
      // setup a new user if non exists and create necesary channels e.g. promotion
      // Some of this data needs to be passed to the trigger button and sent in fetch request
      const [
        user,
        marketplaceChannel,
      ] = await sendbird.setUp();
      setUser(user);
      setChannelUrls({
        marketplace: marketplaceChannel.url,
      });
      setIsLoading(false);
    };
    setup();
  }, []);

  const reset = async () => {
    setIsLoading(true);
    sendbird.reset();

    const [
      user,
      marketplaceChannel,
    ] = await sendbird.setUp();
    setUser(user);
    setChannelUrls({
      marketplace: marketplaceChannel.url,
    });
    setIsLoading(false);
  };

  const start = (url, name, item) => {
    console.log("channel=", channelUrls);
    console.log("item=", item)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channelUrl: channelUrls[name], item, user }),
    });
  };
  // setup
  const appManifests = [
    {
      name: 'marketplace',
      url: 'https://chatsamples.com/marketplace/app'
    }
  ];

  if (isLoading) {
    return null;
  }

  return (
    // need SB Provider at top level so all of app has access to sendbird data
    <SBProvider config={{ appManifests }} appId={APP_ID} userId={user.userId} nickname={NICKNAME}>

      <div className="component-wrapper">
        {showProductPage ? (
          <ProductPage itemSelected={itemSelected} user={user} start={start} setShowProductPage={setShowProductPage} channelUrls={channelUrls} />
        ) : (
          <Marketplace setShowProductPage={setShowProductPage} setItem={setItem} />
        )}
      </div>
    </SBProvider>
  );
}
