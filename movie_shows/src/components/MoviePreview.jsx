import React, { useState, useEffect } from "react";
import "./Movies.jsx";
import { movieList } from "../movieList";
import ReactPlayer from "react-player";
import "./MoviePreview.css";

export const MoviePreview = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = props;

  useEffect(() => {
    getMovieItem();
  }, [id]);

  return (
    <div className="video">
      {selectedMovie ? (
        <ReactPlayer
          url={selectedMovie.trailers[0].url}
          height="450px"
          width="744px"
          controls={true}
          loop={true}
          playing={false}
        />
      ) : (
        <p style={{ fontSize: "14px", color: "hwb(0 89% 7%)" }}>
          <b>
            The Best Movie Streaming Services for 2024. <br />
            Are you a cinephile who wants to replicate the theatrical experience
            at home? <br />
            You need a video streaming service with a large library and
            high-quality audio and visuals.
            <br />
            But where to start? We're here to help. The PCMag staff loves movies
            and has thoroughly
            <br />
            tested the top streaming services for more than a decade. So you can
            trust us when to tell <br />
            you which services are worth your money, such as Netflix, our
            highest-rated Editors' Choice <br />
            winner. The streaming video champ offers many original films,
            several price tiers, and <br />
            Dolby Atmos and Dolby Vision support. Read on for more of our top
            picks and what to <br />
            consider when picking the best movie streaming service for your
            tastes and budget.
          </b>
        </p>
      )}
    </div>
  );

  function getMovieItem() {
    const taregtVideo = movieList.movies.find((item) => item.id === id);
    setSelectedMovie(taregtVideo);
  }
};
