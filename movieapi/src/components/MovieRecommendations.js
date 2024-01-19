import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const MovieRecommendations = () => {
  const dispatch = useDispatch();
  const { title, genre, characters } = useSelector((state) => state.user.userPreferences);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMovieRecommendations = async () => {
      try {
        let url = `http://www.omdbapi.com?apikey=b91b1458&type=movie&s=${title}`;

        if (genre && characters) {
          url += `&s=${title}&genre=${genre}&actors=${characters}`;
        }

        const response = await axios.get(url);

        if (response.data.Search) {
          // Fetch additional details for each movie using IMDb ID
          const detailedMovies = await Promise.all(
            response.data.Search.map(async (movie) => {
              const detailedResponse = await axios.get(
                `http://www.omdbapi.com?apikey=b91b1458&i=${movie.imdbID}`
              );

              return {
                ...movie,
                ...detailedResponse.data,
              };
            })
          );

          setRecommendations(detailedMovies);
        } else {
          setRecommendations([]);
          console.error('No movie recommendations found');
        }
      } catch (error) {
        console.error('Error fetching movie recommendations', error);
      }
    };

    if (title) {
      fetchMovieRecommendations();
    } else {
      setRecommendations([]);
    }
  }, [title, genre, characters, dispatch]);

  return (
    <div>
      {title && (
        <>
          <h2>Movie Recommendations</h2>
          <ul>
            {recommendations.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <div>
                  <strong>Title:</strong> {movie.Title} <br />
                  <strong>Year:</strong> {movie.Year} <br />
                  <strong>Actors:</strong> {movie.Actors} <br />
                  <strong>Plot:</strong> {movie.Plot} <br />
                  <strong>Genre:</strong> {movie.Genre} <br />
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieRecommendations;