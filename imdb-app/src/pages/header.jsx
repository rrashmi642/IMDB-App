import "./App.css";
import {Link} from 'react-router'
const Header= () =>{
    return (
        <div className="header">
            <h1 className="logo" marginTop= '10px'> IMDB</h1>
            <ul className="nav">
                <li ><Link to="/" color="yellow">MovieList </Link></li> 
               <li><Link to="/watchlist">My Watchlist</Link></li> 
               {/* <li><Link>MovieDetails</Link> </li>                 */}
            </ul>
        </div>

    )
}
export default Header;