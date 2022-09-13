import React, { useState } from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import CustomizedApp from "./CustomizedApp";

import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
import { IconButton } from "@mui/material";



function ProductPage({ itemSelected, start, user, channelUrls }) {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="product-page-container">
      {/* <button onClick={()=>setShowProductPage(false)}>Back to marketplace</button> */}
      <img src={itemSelected.img} alt={itemSelected.title} className="product-img" />
      <h2 className="product-title">{itemSelected.title}</h2>
      <h3 className="product-price">{itemSelected.price}</h3>
      <div>Finding the right lounge furniture for your living room can be a real challenge. It should not only be comfortable, but also look great too. If you are arranging a living room or an office, check out our Scarlett 3-seater sofa. The elegant and comfortable form will fit perfectly into any arrangement. It’s simple, mid-century shape will delight every fan of good design. The wooden frame and slender legs make it light and easy to move. A wide selection of upholstery fabrics in various colours makes it much easier to match the furniture to the rest of your room décor.
        <br /><br />
        Scarlett 3-seater sofa is not only a great looking piece of furniture, but also very comfortable. Thanks to filling the backrest with silicone fibre, and the loose seat with high elasticity foam, the sofa becomes soft and springy. Removable backrest and seat cushions make it easy to clean, while sturdy armrests ensure comfort for your arms. Apart from the 3-seater sofa, the Scarlett collection also features an armchair and a sofa for two.</div>
      <button
        className="message-seller-button"
        onClick={() => {
          start(
            "https://chatsamples.com/marketplace/start",
            "marketplace",
            itemSelected
          );
          setShowChat(true);
        }}
      >
        Message the seller
      </button>

      {showChat &&
        <CustomizedApp userId={user.userId} channelUrls={channelUrls} />

      }

    </div>
  );
}
export default withSendBird(ProductPage);
