import React from "react";
import "./Movies.css";

export const MovieThumbnail = (props) => {
  const { id, thumbnail, text } = props;
  return (
    <>
      <div key={id} className="posters">
        <img
          src={thumbnail}
          alt="Poster"
          className="thumbnails"
          onClick={handleClick}
        />
      </div>
    </>
  );
  function handleClick() {
    props.onClick(id);
  }
};
