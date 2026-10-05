import "./SubFull.css";
import { Link } from "react-router-dom";

import { UseMovieContext } from "../../contaxt API/MovieContext";
import MovieText from "./MovieText";
import "./Card.css"
import { useState } from "react";
function TrendingMovie() {
  const { trendingMovies, loading, error } = UseMovieContext();

  const [seeAll, setSeeAll] = useState(false)
  /* LOADING */
  if (loading) {
    return (
      <div className="loading-page">
        <h2>Loading Trending Movies...</h2>
      </div>
    );
  }

  /* ERROR */
  if (error) {
    return (
      <div className="loading-page">
        <h2>{error}</h2>
      </div>
    );
  }

  const moviesToShow = seeAll ? trendingMovies : trendingMovies ?.slice(0,5)

  return (
    <section className="trending">

      <div className="trending-movies">
       <MovieText 
       header="Trending Movies"
       />

        <span className="see-all" onClick={() => setSeeAll(!seeAll)}>
        {seeAll ? "See Less" : "See All"}
        </span>
      </div>

      <div className="movie-container">
        {moviesToShow?.map((movie) => (
          <Link
            to={`/movieDetails/${movie.id}`}
            className="movie-card"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

            <p>{movie.release_date}</p>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default TrendingMovie;