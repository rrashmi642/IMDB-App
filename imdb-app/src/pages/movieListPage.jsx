import { useEffect, useState } from "react";
import MovieList from "../components/movieList";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = (pageNo) => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
    ) 
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };
  useEffect(() => {
    fetchMovies(3);
  }, []);

  return (
    <div className="movielist-page">
      <h1>MovieListPage</h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default MovieListPage;
