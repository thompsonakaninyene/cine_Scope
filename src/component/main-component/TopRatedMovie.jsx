
import { useState } from "react";
import "./SubFull.css";
import { Link } from "react-router-dom";

import { UseMovieContext } from "../../contaxt API/MovieContext";
import MovieText from "./MovieText";

function TopRatedMovie() {
  const { topRatedMovies, loading, error } = UseMovieContext();

  const [seeAll, setSeeAll] = useState(false);

  /* LOADING */
  if (loading) {
    return (
      <div className="loading-page">
        <h2>Loading Top Rated Movies...</h2>
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

  /* MOVIES TO DISPLAY */
  const moviesToShow = seeAll
    ? topRatedMovies
    : topRatedMovies?.slice(0, 5);

  return (
    <section className="top">

      <div className="top-rated">

        <MovieText header="Top Rated" />

        <span
          className="see-all"
          onClick={() => setSeeAll(!seeAll)}
        >
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

export default TopRatedMovie;


