import Movie from "./movie";
import '../pages/App.css'
import WatchListPage from "../pages/watchListPage";
import App from "../App";
const MovieList = ({movies, watchlist, setWatchList}) =>{
    return(
        <div className="movie-list">
            {movies.map(movie=>{
                return <Movie key={movie.id} movie={movie} watchlist={watchlist} setWatchList={setWatchList}/>
            })}
        </div>
    )
}
export default MovieList;