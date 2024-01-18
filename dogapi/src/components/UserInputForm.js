// src/components/UserInputForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserPreferences } from '../redux/actions/userActions';
import axios from 'axios';
import MovieDetail from './MovieDetail';
import '../UserInputForm.css'; // Import the CSS file for styling

const UserInputForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [released, setReleased] = useState('');
  const [year, setYear] = useState('');
  const [rated, setRated] = useState('');
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    dispatch(setUserPreferences({ title, released, year, rated, genre }));
  }, [title, released, year, rated, genre, dispatch]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com?apikey=b91b1458&s=${title}&y=${year}&released=${released}&rated=${rated}&genre=${genre}`);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };

    const debounce = setTimeout(fetchMovies, 300);

    return () => clearTimeout(debounce);
  }, [title, year, released, rated, genre]);

  const handleMovieClick = async (imdbID) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com?apikey=b91b1458&i=${imdbID}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details', error);
    }
  };

  const handleBackButtonClick = () => {
    setSelectedMovie(null);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'released':
        setReleased(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'rated':
        setRated(value);
        break;
      case 'genre':
        setGenre(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {selectedMovie ? (
        <>
          <button onClick={handleBackButtonClick}>Back to Search</button>
          <MovieDetail movie={selectedMovie} />
        </>
      ) : (
        <>
          <form className="search-form">
            <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="Enter title" />
            <input type="text" name="released" value={released} onChange={handleInputChange} placeholder="Enter released year" />
            <input type="text" name="year" value={year} onChange={handleInputChange} placeholder="Enter year" />
            <input type="text" name="rated" value={rated} onChange={handleInputChange} placeholder="Enter rated" />
            <input type="text" name="genre" value={genre} onChange={handleInputChange} placeholder="Enter genre" />
          </form>

          <ul className="movie-grid">
            {movies.map(movie => (
              <li key={movie.imdbID} onClick={() => handleMovieClick(movie.imdbID)}>
                <img src={movie.Poster} alt={movie.Title} />
                <div>
                  <p>Title: {movie.Title}</p>
                  <p>Released: {movie.Released}</p>
                  <p>Year: {movie.Year}</p>
                  <p>Rated: {movie.Rated}</p>
                  <p>Genre: {movie.Genre}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserInputForm;
