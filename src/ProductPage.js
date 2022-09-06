import React from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
import { IconButton } from "@mui/material";

function ProductPage(itemSelected, start, setShowProductPage) {
  const item = itemSelected.itemSelected;
  return (
    <div className="product-page-container">
    {/* <button onClick={()=>setShowProductPage(false)}>Back to marketplace</button> */}
      <img src={item.img} alt={item.title} className="product-img" />
      <h2 className="product-title">{item.title}</h2>
      <h3 className="product-price">{item.price}</h3>
      <button
        className="message-seller-button"
        onClick={() => {
          start(
            "https://chatsamples.com/marketplace/start",
            "marketplace",
            item
          );
        }}
      >
        Message the seller
      </button>
    </div>
  );
}
export default withSendBird(ProductPage);
