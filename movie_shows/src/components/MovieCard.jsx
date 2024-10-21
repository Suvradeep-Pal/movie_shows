import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { MovieThumbnail } from "./movieThumbnail";
import "./MovieCard.css";

export const MovieCard = ({ id, thumbnail, showTimes, onClick }) => {
  return (
    <div className="cardcontent">
      <div className="playingtext">Now Playing</div>
      <Card
        className="card"
        style={{
          backgroundColor: "rgba(37, 36, 36, 0.6)",
          borderRadius: "10px",
        }}
        onClick={handleClick}
      >
        <CardActionArea>
          <MovieThumbnail thumbnail={thumbnail} onClick={onClick} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" className="text">
              {showTimes
                .map((value) => value.time.toFormat("hh:mm a"))
                .join(" ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
  function handleClick() {
    onClick(id);
  }
};
