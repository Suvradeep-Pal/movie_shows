import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { movieList } from "../movieList";
import "./Movies.css";
import { Dropdown } from "./Dropdown.jsx";
import { Collection } from "./Collection.jsx";
import { MovieCard } from "./MovieCard.jsx";
import { Header } from "./Header.jsx";
import { MoviePreviewDetail } from "./MoviePreviewDetail.jsx";

const Movies = () => {
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const [selectedCategory, setSelectedCategory] = useState();

  const navigate = useNavigate();

  return (
    <div className="parent">
      <Header />
      <div className="content">
        <div className="left">
          <MoviePreviewDetail onDateChange={setSelectedDate} />
        </div>
        <div className="right">
          <Dropdown onChange={setSelectedCategory} />
          <Collection />
          {movieList.movies.filter(filterMovies).map((e) => {
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
    </div>
  );
  function handleClick(id) {
    setSelectedMovieId(id);
    navigate(`/movie/${id}`);
  }

  function filterMovies(movie) {
    const isDateValid = movie.showTimes.some((value) =>
      value.time.hasSame(selectedDate, "day")
    );

    let isCategoryValid = true;

    if (selectedCategory) {
      isCategoryValid = movie.genre.some(
        (value) =>
          selectedCategory.toLowerCase().localeCompare(value.toLowerCase()) ===
          0
      );
    }

    return isDateValid && isCategoryValid;
  }
};

export default Movies;
