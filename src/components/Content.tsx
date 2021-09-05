import { useState, useEffect, useContext } from 'react'
import { GenreContext } from '../context/GenreContext';
import { MovieCard } from './MovieCard';
import { Header } from './Header';
import { api } from '../services/api';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const { list, setList } = useContext(GenreContext);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${list.id}`).then(response => {
      setMovies(response.data);
    });
  }, [list.id]); 
  

  return (
    <div className="container">      
      <Header/>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}