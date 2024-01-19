import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MovieDetail from './components/MovieDetail';

describe('MovieDetail Component', () => {
    const mockMovie = {
      Title: 'Inception',
      Released: '2010-07-16',
      Year: '2010',
      Rated: 'PG-13',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      Poster: 'inception-poster.jpg',
    };
  
    it('displays the correct release date', () => {
      render(<MovieDetail movie={mockMovie} />);
      const releaseDateElement = screen.getByText(/Released: \d{4}-\d{2}-\d{2}/);
      expect(releaseDateElement).toBeInTheDocument();
    });
  
    it('displays the correct genre', () => {
      render(<MovieDetail movie={mockMovie} />);
      const genreElement = screen.getByText(/Genre: Action, Adventure, Sci-Fi/);
      expect(genreElement).toBeInTheDocument();
    });
  
    it('displays the correct director', () => {
      render(<MovieDetail movie={mockMovie} />);
      const directorElement = screen.getByText(/Director: Christopher Nolan/);
      expect(directorElement).toBeInTheDocument();
    });
  
    it('displays the correct actors', () => {
      render(<MovieDetail movie={mockMovie} />);
      const actorsElement = screen.getByText(/Actors: Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page/);
      expect(actorsElement).toBeInTheDocument();
    });
  
    it('displays the correct plot', () => {
      render(<MovieDetail movie={mockMovie} />);
      const plotElement = screen.getByText(/A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O./);
      expect(plotElement).toBeInTheDocument();
    });
  
    it('displays the correct poster', () => {
      render(<MovieDetail movie={mockMovie} />);
      const posterElement = screen.getByAltText('Inception');
      expect(posterElement).toBeInTheDocument();
    });
  
    it('matches snapshot', () => {
      const { asFragment } = render(<MovieDetail movie={mockMovie} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  