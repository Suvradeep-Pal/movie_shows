import React from "react";
import { movieList } from "../movieList";
import { useState, useEffect } from "react";
import "./Movies.css";
import { MovieThumbnail } from "./movieThumbnail.jsx";
import { MoviePreview } from "./MoviePreview.jsx";
import { Dropdown } from "./Dropdown.jsx";
import { Collection } from "./Collection.jsx";
// import { Calender } from "./Calender.jsx";
import { MovieDescription } from "./MovieDescription.jsx";

const Movies = () => {
  const [selectedMovieId, setSelectedMovieId] = useState();

  return (
    <div className="parent">
      <div className="main">
        <p className="watchnow">
          <b>Watch Now</b>
        </p>
        <MoviePreview id={selectedMovieId} /> <br />
        <MovieDescription />
      </div>

      <div className="right">
        {/* <Calender /> */}
        <Dropdown />
        <Collection />
        {movieList.movies.map((e) => {
          return (
            <MovieThumbnail
              id={e.id}
              thumbnail={e.thumbnail}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
  function handleClick(id) {
    setSelectedMovieId(id);
  }
};

export default Movies;
