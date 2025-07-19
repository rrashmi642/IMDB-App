import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import MovieDetailsPage from "./pages/movieDetailspage";
import WatchListPage from "./pages/watchListPage";
import MovieListPage from "./pages/movieListPage";
import Header from './pages/header.jsx';
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<MovieListPage/>} />
        <Route path="/details" element={<MovieDetailsPage/>} />
        <Route path="/watchlist" element={<WatchListPage/>} />
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
