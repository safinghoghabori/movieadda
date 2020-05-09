import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "@reach/router";

function MovieThumb({ image, movieId, clickable }) {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} alt="moviethumb" className="clickable" />
        </Link>
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </StyledMovieThumb>
  );
}

export default MovieThumb;
