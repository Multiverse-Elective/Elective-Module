// src/components/MovieDetail.js
import React from 'react';

const MovieDetail = ({ movie }) => {
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
    <div>
      <h2>{Title}</h2>
      <img src={Poster} alt={Title} />
      <p><strong>Released:</strong> {Released}</p>
      <p><strong>Year:</strong> {Year}</p>
      <p><strong>Rated:</strong> {Rated}</p>
      <p><strong>Runtime:</strong> {Runtime}</p>
      <p><strong>Genre:</strong> {Genre}</p>
      <p><strong>Director:</strong> {Director}</p>
      <p><strong>Writer:</strong> {Writer}</p>
      <p><strong>Actors:</strong> {Actors}</p>
      <p><strong>Plot:</strong> {Plot}</p>
    </div>
  );
};

export default MovieDetail;
