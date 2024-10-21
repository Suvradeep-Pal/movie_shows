import React, { useState, useEffect } from "react";
import "./Movies.jsx";
import ReactPlayer from "react-player";
import "./MoviePreview.css";

export const MoviePreview = (props) => {
  const { selectedMovie } = props;

  console.log("rendering", typeof id);
  return (
    <div className="video">
      {selectedMovie ? (
        <ReactPlayer
          url={selectedMovie.trailers[0].url}
          height="450px"
          width="740px"
          controls={true}
          loop={true}
          playing={false}
        />
      ) : (
        <p style={{ fontSize: "18px", color: "hwb(0 89% 7%)" }}>
          <b>
            The Best Movie Streaming Services for 2024. <br />
            Are you a cinephile who wants to replicate the theatrical experience
            at home? You need a video streaming service with a large library and
            high-quality audio and visuals. But where to start? We're here to
            help. The PCMag staff loves movies and has thoroughly tested the top
            streaming services for more than a decade. So you can trust us when
            to tell you which services are worth your money, such as Netflix,
            our highest-rated Editors' Choice winner.
            <br />
            <br />
            The streaming video champ offers many original films, several price
            tiers, and Dolby Atmos and Dolby Vision support. Read on for more of
            our top picks and what to consider when picking the best movie
            streaming service for your tastes and budget.
          </b>
        </p>
      )}
    </div>
  );
};
