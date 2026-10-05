import "./WatchList.css";
import Logo from "../shared/logo";
import MovieButton from "./Button";
import { Link } from "react-router-dom";
import MovieText from "./MovieText";
import Header from "./Header";
import useWatchList from "../../Hooks/WatchListHook";

export default function WatchList() {
  const {
    movieFromStorage,
    loading,
    deletedMovie,
    clearList,
    ClearWatchList,
    DeleteFromWatchList,
  } = useWatchList();

  return (
    <div className="bam-div">
      <div className="back-div">
        <Header />
        <main>
          {/* TITLE */}
          <section>
            <div className="discover-movies">
              <MovieText
                header2="My WatchList"
                
              />
              <MovieText wellcome="Movies You've saved for later"/>
            </div>
          </section>

          {/* LOADING */}
          {loading && <p className="loading">Loading watchlist...</p>}

          {/* MOVIE LIST */}
          {!loading && movieFromStorage.length > 0 && (
            <section className="movie-section1">
              <div className="movie-flier1">
                {movieFromStorage.map((movie) => (
                  <div key={movie.id} className="movie-card">
                    {/* MOVIE IMAGE */}
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/placeholder.jpg"
                      }
                      alt={movie.title || movie.name || "Movie"}
                    />

                    <span className="waiter-span">
                      <span className="waiter">
                        <h4>{movie.title || movie.name || "Untitled"}</h4>

                        <p>
                          {movie.release_date || movie.first_air_date || "N/A"}
                        </p>

                        <p>
                          ⭐{" "}
                          {movie.vote_average
                            ? Number(movie.vote_average).toFixed(1)
                            : "N/A"}
                        </p>
                      </span>

                      {/* DELETE BUTTON */}
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => DeleteFromWatchList(movie.id)}
                      >
                        {deletedMovie === movie.id ? "Deleted" : "Delete"}
                      </button>
                    </span>
                  </div>
                ))}
              </div>

              {/* CLEAR BUTTON */}
              <button
                type="button"
                className="clear-btn"
                onClick={ClearWatchList}
              >
                {clearList ? "Clear WatchList" : "Cleared"}
              </button>
            </section>
          )}
        </main>

        {/* EMPTY WATCHLIST */}
        {!loading && movieFromStorage.length === 0 && (
          <footer className="watch-me">
            <div>
              <Logo />

              <MovieText header2="Your watchlist is empty." />

              <MovieText welcome="Save movies to find them here." />

              <Link to="/discoverMovie">
                <MovieButton patrick="navigated-button">
                  Discover Movies
                </MovieButton>
              </Link>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
