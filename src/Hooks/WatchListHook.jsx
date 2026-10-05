import { useEffect, useState } from "react";

export default function useWatchList() {
  const [movieFromStorage, setMovieFromStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletedMovie, setDeletedMovie] = useState(null);
  const [clearList, setClearList] = useState(true);

  // GET WATCHLIST FROM LOCAL STORAGE
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("watchList")) || [];

    console.table("Watchlist:", savedMovies);

    setMovieFromStorage(savedMovies);
    setLoading(false);
  }, []);

  // DELETE ONE MOVIE
  const DeleteFromWatchList = (movieId) => {
    console.log("Deleting movie:", movieId);

    const updatedWatchList = movieFromStorage.filter(
      (movie) => movie.id !== movieId,
    );

    // Update React state
    setMovieFromStorage(updatedWatchList);

    // Update localStorage
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));

    // Show "Deleted"
    setDeletedMovie(movieId);

    setTimeout(() => {
      setDeletedMovie(null);
    }, 1000);
  };

  // CLEAR ENTIRE WATCHLIST
  const ClearWatchList = () => {
    console.log("Clearing watchlist");

    // Remove everything from React
    setMovieFromStorage([]);

    // Remove everything from localStorage
    localStorage.removeItem("watchList");

    // Show "Cleared"
    setClearList(false);

    setTimeout(() => {
      setClearList(true);
    }, 1000);
  };

  return {
    movieFromStorage,
    loading,
    deletedMovie,
    clearList,
    ClearWatchList,
    setDeletedMovie,
    DeleteFromWatchList,
    setMovieFromStorage,
    
  };
}
