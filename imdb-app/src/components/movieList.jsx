import Movie from "./movie";
import '../pages/App.css'
const MovieList = ({movies}) =>{
    return(
        <div className="movie-list">
            {movies.map(movie=>{
                return <Movie movie={movie}/>
            })}
        </div>
    )
}
export default MovieList;