import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
let genre_ids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
const WatchListPage = ({ watchlist }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(Object.values(watchlist));
  }, [watchlist]);

  const SearchMovieHandle=(e)=>{
    console.log(e.target.value);
    const newlist= Object.values(watchlist).filter(movie=>movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setList(newlist);
  }
  console.log("nn", watchlist);
  return (
    <div>
      <h1>WatchListPage</h1>
      <div className="watchlist-container">
        <div className="leftside"></div>
        <div className="rightside">
          <input type="text" placeholder="Search" onChange={SearchMovieHandle}></input>
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Movie Title</th>
                <th>Poster</th>
                <th> Genre </th>
                <th>Popularity </th>
              </tr>
            </thead>
            <tbody>
              {/* {Object.values(watchlist).map((movie) =>(
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
            </tr>
           ))} watchlist &&
            Object.values(watchlist)*/}

              {list.map((movie) => {
                return (
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.id}
                        height="80px"
                        justify-content="center"
                      />
                    </td>
                    <td>
                      {movie.genre_ids
                        .map((genre) => genre_ids[genre])
                        .join(", ")}
                    </td>
                    <td>{movie.popularity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default WatchListPage;
