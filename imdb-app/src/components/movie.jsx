// import MovieList from "./movieList";
// import MovieListPage from "../pages/movieListPage";
import '../pages/App.css'

const Movie = ({movie})=>{
    return (<div className="movie">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt={movie.title}/>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <button className="watchlist">+Watchlist</button>

        </div>

    </div>)
}
export default Movie;