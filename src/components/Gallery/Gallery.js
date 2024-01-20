import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="GlobalContainer">
      <div className="GlobalWrapper">
        <div className="header">Gallery</div>
        <div className="sub2">
          Don't know what kind of design you want for your next set? Find some
          inspiration here!
        </div>
        <img className="galleryImg"
          src={
            "https://upload.wikimedia.org/wikipedia/en/2/28/Bloodgangsign.jpg?20090403113135"
          }
        />
      </div>
    </div>
  );
}

export default Gallery;
