import { lazy, StrictMode, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./pages/header";
// import MovieListPage from "./pages/movieListPage.jsx";
// import WatchListPage from "./pages/watchListPage.jsx";
// import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
const LazyMovieList = lazy(() => import("./pages/movieListPage.jsx"));
const LazyWatchList = lazy(() => import("./pages/watchListPage.jsx"));

import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  const [watchlist, setWatchList] = useState({});
  console.log("app", watchlist);
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h1 style={{ color: 'green'}}>Loading...</h1>}>
          <Routes>
            <Route
              path="/"
              element={
                <LazyMovieList
                  watchlist={watchlist}
                  setWatchList={setWatchList}
                />
              }
            />
            {/* <Route path="/details" element={<MovieDetailsPage/>} /> */}
            <Route
              path="/watchlist"
              element={<LazyWatchList watchlist={watchlist} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
