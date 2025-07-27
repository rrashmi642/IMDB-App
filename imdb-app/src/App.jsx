import { StrictMode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./pages/header";
import MovieListPage from "./pages/movieListPage.jsx";
import WatchListPage from "./pages/watchListPage.jsx";
// import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";

import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  const [watchlist, setWatchList]=useState({});
  console.log("app",watchlist);
  return (
    <StrictMode>
       <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<MovieListPage watchlist={watchlist} setWatchList={setWatchList}/>} />
        {/* <Route path="/details" element={<MovieDetailsPage/>} /> */}
        <Route path="/watchlist" element={<WatchListPage watchlist={watchlist}/>} />
      </Routes>
      </BrowserRouter>
    </StrictMode>
 
  );
}

export default App;
