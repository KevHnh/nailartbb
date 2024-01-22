import React from "react";
import "./Gallery.css";
import blob from "../../assets/webAssets/webBlob.svg"

function Gallery() {
  return (
    <div className="GlobalContainer">
      <img src={blob} className="blob b1"></img>
      <img src={blob} className="blob b2"></img>
      <div className="GlobalWrapper">
        <div className="header">Gallery</div>
        <div className="sub2">
          Don't know what kind of design you want for your next set? Find some
          inspiration here!
        </div>
      </div>
    </div>
  );
}

export default Gallery;
