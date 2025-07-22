// import MovieList from "./movieList";
// import MovieListPage from "../pages/movieListPage";
import '../pages/App.css'
import App from '../App';

const Movie = ({movie, watchlist,setWatchList})=>{
    const clickbtnhandler=()=>{
         setWatchList({...watchlist, [movie.id]:movie})
        // console.log("watchlist", watchlist);
    }
    return (
        <div className="movie">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt={movie.title}/>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <button className="watchlist" onClick={clickbtnhandler}>{watchlist[movie.id]?'-': '+'}Add Watchlist</button>

        </div>

    </div>)
}
export default Movie;