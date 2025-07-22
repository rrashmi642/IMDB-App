import "./App.css";
const Header= () =>{
    return (
        <div className="header">
            <h1 className="logo"> IMDB</h1>
            <ul className="nav">
                <a href="/"><li>MovieList</li></a> 
               <a href="/watchlist"><li>My Watchlist</li></a> 
               <a href=""><li>MovieDetails</li></a>                 
            </ul>
        </div>

    )
}
export default Header;