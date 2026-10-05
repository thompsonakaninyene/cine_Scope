import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const [popularResponse, topRatedResponse, trendingResponse] =
          await Promise.all([
            fetch(
              `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
            ),

            fetch(
              `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
            ),

            fetch(
              `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`
            ),
          ]);

        if (
          !popularResponse.ok ||
          !topRatedResponse.ok ||
          !trendingResponse.ok
        ) {
          throw new Error("Failed to fetch movie data");
        }

        const popularData = await popularResponse.json();
        const topRatedData = await topRatedResponse.json();
        const trendingData = await trendingResponse.json();

        setPopularMovies(popularData.results);
        setTopRatedMovies(topRatedData.results);
        setTrendingMovies(trendingData.results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apikey]);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        topRatedMovies,
        trendingMovies,
        loading,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const UseMovieContext = () => {
  return useContext(MovieContext);
};