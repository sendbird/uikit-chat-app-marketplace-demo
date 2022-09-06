import React from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function Marketplace({ setShowProductPage, setItem }) {
  return (
    <div className="marketplace-container">
              <h3 className="h3">Marketplace</h3>
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.price}
              position="below"
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  onClick={() => {
                    setShowProductPage(true);
                    setItem(item);
                  }}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://pyxis.nymag.com/v1/imgs/561/6ee/d4bf813a22d60fab33e806e7e77f917a94-harmony-sofa-lede.2x.rsocial.w600.jpg",
    title: "White Couch",
    price: "$695",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0434/1104/6567/products/rjb3bi4nftoju2v1yfgz.jpg?v=1636620130",
    title: "TV Stand",
    price: "$210",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    price: "$180",
  },
  {
    img: "https://c8.alamy.com/zooms/9/b577bc90e45945aea44da67e4e95c855/t863we.jpg",
    title: "Treadmill",
    price: "$450",
    cols: 2,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0357/2432/9005/files/6-13_hero2_grande.jpg?v=1654887360",
    title: "Stetson Hat",
    price: "$215",
    cols: 2,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0124/5662/4187/products/3_6bb9d2ac-65a8-4006-9d95-1c59b1778e3b_1000x1000.jpg?v=1636729665",
    title: "Standing Desk",
    price: "$839",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://i5.walmartimages.com/asr/b355f103-3ed1-445d-94fd-58f28f88ac61_2.6f0b4c36983a42b3e2af17e9ce89f90d.jpeg",
    title: "Rug",
    price: "$646",
  },
  {
    img: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-build-a-wooden-bedframe-PH-step-10.jpg",
    title: "Bedframe",
    price: "$930",
  },
  {
    img: "https://media1.popsugar-assets.com/files/thumbor/E3d3MB6T0k570bc_LEqMxRNmumc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/06/08/813/n/1922243/28d5621162a0eaf58b4377.20560495_/i/cat-trees-that-arent-ugly.webp",
    title: "Cat Tower",
    price: "$400",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.ebayimg.com/images/g/bLYAAOSwA7deoTyj/s-l500.jpg",
    title: "Plate Set",
    price: "$125",
  },
  {
    img: "https://cdn.thewirecutter.com/wp-content/media/2021/11/32inchTVs-2048px-TCL32S334-3x2-1.jpg?auto=webp&quality=60&width=570",
    title: "Samsung TV",
    price: "$700",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    price: "$86",
    cols: 2,
  },
];
export default withSendBird(Marketplace);
