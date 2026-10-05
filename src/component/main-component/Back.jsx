
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../main-component/Back.css";
import MovieText from "./MovieText";
import Header from "./Header";
import "./Card.css";

export default function Back() {
  const { id } = useParams();

  const apikey = import.meta.env.VITE_API_KEY;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // WATCHLIST STATES
  const [addToWatchlist, setAddToWatchlist] = useState(true);
  const [watchListCount, setWatchListCount] = useState(0);



  useEffect(() => {
    const details = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&append_to_response=credits,videos`
        );

        const data = await response.json();

        console.log("Movie data:", data);

        if (!response.ok) {
          throw new Error(
            data.status_message || "Something went wrong"
          );
        }

        setMovie(data);
      } catch (error) {
        console.log("ERROR:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    details();
  }, [id, apikey]);


  useEffect(() => {
    const watchList =
      JSON.parse(localStorage.getItem("watchList")) || [];

    
  }, []);


  useEffect(() => {
    if (!movie) return;

    const watchList =
      JSON.parse(localStorage.getItem("watchList")) || [];

    const movieExists = watchList.some(
      (item) => item.id === movie.id
    );

    if (movieExists) {
      setAddToWatchlist(false);
    } else {
      setAddToWatchlist(true);
    }

    // Make sure count is correct
    setWatchListCount(watchList.length);
  }, [movie]);


  const AddToWatchlist = () => {
    if (!movie) {
      console.log("No movie available");
      return;
    }

    try {
      let watchList =
        JSON.parse(localStorage.getItem("watchList")) || [];

      // CHECK FOR DUPLICATE
      const movieExists = watchList.some(
        (item) => item.id === movie.id
      );

      if (movieExists) {
        console.log("Movie already exists");

        setAddToWatchlist(false);
        setWatchListCount(watchList.length);

        return;
      }

      // ADD MOVIE
      watchList.push(movie);

      // SAVE TO LOCAL STORAGE
      localStorage.setItem(
        "watchList",
        JSON.stringify(watchList)
      );

      // UPDATE COUNT
      setWatchListCount(watchList.length);

      // CHANGE BUTTON
      setAddToWatchlist(false);

      console.log("Movie added successfully!");
      console.log("Watchlist:", watchList);
      console.log("Watchlist count:", watchList.length);
    } catch (error) {
      console.log("Watchlist error:", error);
    }
  };



  if (loading) {
    return (
      <h2 className="loading">
        🕸️ Loading...
      </h2>
    );
  }


  if (error) {
    return <h2>Error: {error}</h2>;
  }


  if (!movie) {
    return <h2>No movie found</h2>;
  }

  return (
    <div className="main-back">

     

      {movie.backdrop_path ? (
        <img
          className="backdrop-image"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="backdrop-image"></div>
      )}

      {/* DARK OVERLAY */}

      <div className="backdrop-overlay"></div>

      {/* CONTENT */}

      <div className="carry-on">

        <Header />

        <section className="segment">

          <div className="jack">

            {/* MOVIE POSTER */}

            <div>
              <img
                className="common"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            {/* MOVIE INFORMATION */}

            <div>

              <h2>{movie.title}</h2>

              {/* MOVIE FIGURES */}

              <div className="figure">

                <h4>
                  {Math.round(movie.vote_average * 10)}%
                </h4>

                <p>
                  {movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : "N/A"}
                </p>

                <p>
                  {movie.runtime
                    ? `${Math.floor(movie.runtime / 60)}h ${
                        movie.runtime % 60
                      }m`
                    : "N/A"}
                </p>

              </div>

              {/* GENRES */}

              <div className="btn-div">
                {movie.genres?.map((genre) => (
                  <button key={genre.id}>
                    {genre.name}
                  </button>
                ))}
              </div>

              {/* OVERVIEW */}

              <p>{movie.overview}</p>

              {/* MOVIE DETAILS */}

              <div className="direct">

                <div>
                  <p>Director</p>

                  <h4>
                    {movie.credits?.crew?.find(
                      (person) =>
                        person.job === "Director"
                    )?.name || "N/A"}
                  </h4>
                </div>

                <div>
                  <p>Budget</p>

                  <h4>
                    {movie.budget
                      ? `$${(
                          movie.budget / 1000000
                        ).toFixed(0)} million`
                      : "N/A"}
                  </h4>
                </div>

                <div>
                  <p>Revenue</p>

                  <h4>
                    {movie.revenue
                      ? `$${(
                          movie.revenue / 1000000
                        ).toFixed(1)} million`
                      : "N/A"}
                  </h4>
                </div>

                <div>
                  <MovieText welcome="Release Date" />

                  <h4>
                    {movie.release_date || "N/A"}
                  </h4>
                </div>

                <div>
                  <p>Status</p>

                  <h4>
                    {movie.status || "N/A"}
                  </h4>
                </div>

              </div>

              <button
                className="btn"
                onClick={AddToWatchlist}
                type="button"
              >
                {addToWatchlist
                  ? `▶ Add to watchList (${watchListCount})`
                  : `Added (${watchListCount})`}
              </button>

              {/* TOP CAST */}

              <h3>Top Cast</h3>

              <div className="images-div">

                {movie.credits?.cast
                  ?.slice(0, 5)
                  .map((person) => (
                    <div key={person.id}>

                      {person.profile_path && (
                        <img
                          className="carry-me"
                          src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                          alt={person.name}
                        />
                      )}

                      <h4>{person.name}</h4>

                      <p>{person.character}</p>

                    </div>
                  ))}

              </div>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
