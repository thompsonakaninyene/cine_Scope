function MovieButton({ children, style = "" }) {
  return (
    <button className={`movie-button ${style}`}>
      {children}
    </button>
  );
}

export default MovieButton;