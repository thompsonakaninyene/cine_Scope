import "./SubFull.css";
import { Link } from "react-router-dom";

import { UseMovieContext } from "../../contaxt API/MovieContext";
import MovieText from "./MovieText";
import { useState } from "react";
export default
function PopularMovie() {
  const { popularMovies, loading, error } = UseMovieContext();

  const [seeAll, setSeeAll] = useState(false);
  /* LOADING */
  if (loading) {
    return (
      <div className="loading-page">
        <h2>Loading Popular Movies...</h2>
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

  const moviesToShow = seeAll ? popularMovies : popularMovies ?.slice(0,5)
  return (
    <section className="pop">

      <div className="popular-movies">
        <MovieText 
        header="Popular Movies"
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

            <h3>
              {movie.title}
            </h3>

            <p>
              {movie.release_date}
            </p>
          </Link>
        ))}

      </div>

    </section>
  );
}

