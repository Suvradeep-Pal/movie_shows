import React from "react";
import "./MovieDescription.css";

export const MovieDescription = (props) => {
  const { movie } = props;
  if (!movie) {
    return null;
  }
  const { id, title, year, genre, director, cast, rating, text } = movie;
  return (
    <div
      className="description"
      style={{ backgroundColor: "rgba(37, 36, 36,0.6)" }}
    >
      <div>Title: {title}</div>
      <div>Year: {year}</div>
      <div>Genre: {genre.join(", ")}</div>
      <div>Director: {director}</div>
      <div>Cast: {cast.join(", ")}</div>
      <div>Rating: {rating}</div>
      <br />
      <div>{text}</div>
    </div>
  );
};
