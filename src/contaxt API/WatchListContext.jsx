import { createContext, useContext, useEffect, useState } from "react";

const WatchListContext = createContext();

export function WatchListProvider({children}) {
  const [movieFromStorage, setMovieFromStorage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletedMovie, setDeletedMovie] =useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;


   useEffect(() => {
        const savedMovies =
            JSON.parse(localStorage.getItem("watchList")) || [];

        console.log("Watchlist:", savedMovies);

        setMovieFromStorage(savedMovies);
        setLoading(false);
    }, []);

    // DELETE ONE MOVIE
    const DeleteFromWatchList = (movieId) => {
        console.log("Deleting movie:", movieId);

        const updatedWatchList = movieFromStorage.filter(
            (movie) => movie.id !== movieId
        );

        // Update React state
        setMovieFromStorage(updatedWatchList);

        // Update localStorage
        localStorage.setItem(
            "watchList",
            JSON.stringify(updatedWatchList)
        );

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
            setDeletedMovie(true);
        }, 1000);
    };

    return(
      <WatchListContext.Provider
        value={{
          movieFromStorage, 
          loading,
          deletedMovie,
          ClearWatchList,
          DeleteFromWatchList,
          setDeletedMovie,
          setMovieFromStorage,
          apiKey
        }}>
          {children}
      </WatchListContext.Provider>
    )
}

export function useWatchListContext() {
  return useContext(WatchListContext)
}