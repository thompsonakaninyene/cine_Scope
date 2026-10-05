import "./SubFull.css";
import "./Card.css";
import Header from "./Header";
import PopularMovie from "./PopularMovie";
import TopRatedMovie from "./TopRatedMovie";
import TrendingMovie from "./TrendingMovie";
import { UseMovieContext } from "../../contaxt API/MovieContext";

import MovieButton from "./Button";
import MovieText from "./MovieText";

function SubFull() {
  const {  loading, error } =
    UseMovieContext();

  /* LOADING */
  if (loading) {
    return (
      <div className="loading-page">
        <h2> 🕸️Loading Movies...</h2>
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

  return (
    <main className="main-div">
      <Header />

      <section className="card-mov">
        <div className="photo">
          <img
            src="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgOqO3G.jpg"
            alt="Interstellar"
          />
        </div>

        <div className="shieft">
          <MovieText header="FEATURED" />
          <div className="welcome-div">
            <MovieText header2="INTERSTELLAR" />
          </div>
          <MovieText
            welcome=" A team of explorers travel through a wormhole
              in space in an attempt to ensure humanity's
              survival."
          />

          <div className="movie-button">
            <MovieButton style="watch-now">Watch Now</MovieButton>

            <MovieButton style="add-watch">+ Add to Watchlist</MovieButton>
          </div>
        </div>
      </section>

        <PopularMovie />
        <TopRatedMovie />
        <TrendingMovie />
    </main>
  );
}

export default SubFull;
