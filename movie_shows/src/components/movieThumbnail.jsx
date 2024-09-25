import React from "react";
import { movieList } from "../movieList";
import "./Movies.css";

export const MovieThumbnail = (props) => {
  const { id, thumbnail } = props;
  return (
    <div key={id} className="posters">
      <img
        src={thumbnail}
        alt="Poster"
        className="thumbnails"
        onClick={handleClick}
      />
      {/* <h4>{e.trailers[0].url}</h4> */}
    </div>
  );
  function handleClick() {
    props.onClick(id);
  }
};
