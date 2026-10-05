import "./Card.css";

export default function MovieText({
  header,
  welcome,
  wellcome,
  about,
  info,
  header2,
  header4
 
}) {
  return (
    <div className="movie-text">
      <h1 className="header">{header}</h1>

      <h2 className="header2">{header2}</h2>
      <h4 className="header4">{header4}</h4>

      <p className="welcome">{welcome}</p>

      <div className="welcome-div">
        <p className="info">{about}</p>

        <p>{wellcome}</p>

        <p className="about">{info}</p>
       
      </div>
    </div>
  );
}