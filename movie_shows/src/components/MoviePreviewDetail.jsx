import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviePreview } from "./MoviePreview.jsx";
import { MovieDescription } from "./MovieDescription.jsx";
import { movieList } from "../movieList.js";
import { Calender } from "./Calender.jsx";

export const MoviePreviewDetail = (props) => {
  const { onDateChange } = props;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getMovieItem(id);
  }, [id]);

  return (
    <div>
      <Calender onChange={onDateChange} />
      <MoviePreview key={id} selectedMovie={selectedMovie} /> <br />
      <MovieDescription movie={selectedMovie} />
    </div>
  );
  function getMovieItem(id) {
    const taregtVideo = movieList.movies.find(
      (item) => item.id.toString() === id
    );
    console.log(taregtVideo);
    setSelectedMovie(taregtVideo);
  }
};
