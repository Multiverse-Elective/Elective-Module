import React from 'react';
import '../MovieDetail.scss';
const MovieDetail = ({ movie, handleBackButtonClick }) => {
  if (!movie) {
    return null;
  }

  const {
    Title,
    Released,
    Year,
    Rated,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Poster,
  } = movie;

  return (
    <div className="movie-detail">
      <img src={Poster} alt={Title} />
      <p className="movie-title">{Title}</p>
      <p>Released: {Released}</p>
      <p>Year: {Year}</p>
      <p>Rated: {Rated}</p>
      <p>Runtime: {Runtime}</p>
      <p>Genre: {Genre}</p>
      <p>Director: {Director}</p>
      <p>Writer: {Writer}</p>
      <p>Actors: {Actors}</p>
      <p>Plot: {Plot}</p>
    </div>
  );
};

export default MovieDetail;