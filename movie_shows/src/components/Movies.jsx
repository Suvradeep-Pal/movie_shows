import React from "react";
import { movieList } from "../movieList";
import { useState, useEffect } from "react";
// import "./Movies.css";

import { MovieThumbnail } from "./movieThumbnail.jsx";
import MoviePreview from "./MoviePreview.jsx";
const Movies = () => {
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [error, setError] = useState();

  return (
    <div>
      <MoviePreview id={selectedMovieId} />
      <div className="parent">
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
