import "./NavBar.css";
import { Link } from "react-router-dom";
import MovieButton from "../main-component/Button";

export default function Navigation() {
  return (
    <div className="navigate">
      
        <Link to="/">
        <MovieButton style="home-btn">Home</MovieButton>
      </Link>
      

      <Link to="/discoverMovie">
        <MovieButton style="discover-btn">Discover</MovieButton>
      </Link>

      <Link to="/watchPath">
        <MovieButton style="register-btn">WatchList</MovieButton>
      </Link>

      <div className="auth-div">
        <Link to="/RegisterPath">
          <MovieButton style="yellow-btn">Register</MovieButton>
        </Link>

        <Link to="/loginPath">
          <MovieButton style="green-btn">SignIn</MovieButton>
        </Link>
      </div>
    </div>
    
  );
}
