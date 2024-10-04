import React from "react";
import { movieList } from "../movieList";
import { useState, useEffect } from "react";
import "./Movies.css";
import { MovieThumbnail } from "./movieThumbnail.jsx";
import { MoviePreview } from "./MoviePreview.jsx";
import { Dropdown } from "./Dropdown.jsx";
import { Collection } from "./Collection.jsx";
import { Calender } from "./Calender.jsx";
import { MovieDescription } from "./MovieDescription.jsx";
import { MovieCard } from "./MovieCard.jsx";
// import { Grid, Container } from "@mui/material";
// import { MovieCard } from "./MovieCard.jsx";

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
        <Calender />
        <Dropdown />
        <Collection />
        {movieList.movies.map((e) => {
          return (
            <MovieCard
              id={e.id}
              thumbnail={e.thumbnail}
              onClick={handleClick}
              title={e.title}
              showTimes={e.showTimes}
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
