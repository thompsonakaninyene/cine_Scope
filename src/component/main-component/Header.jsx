import Logo from "../shared/logo";
import "./SubFull.css";

import icon from "../../assets/downloadIcon.png";
import me from "../../assets/Akan1.png";

import Navigation from "../shared/NavBar";
import { Link } from "react-router-dom";

import { UseNameContext } from "../../contaxt API/UserContext";
export default
function Header() {
  const { Greetings } = UseNameContext();

  return (
    <div className="head-div">

      <div className="greetings">
          <marquee behavior="alternate" direction="left">
            <span >{Greetings}</span>
          </marquee>
        </div>
      <div className="header-cine">

       

        {/* LOGO */}
        <div className="logo-scope">
          <Logo />
        </div>

        {/* CINE TEXT */}
        <div className="cine-span">
          <span className="cineScope">
           cineScope
          </span>
        </div>

        {/* NAVIGATION */}
        <div className="Home-div">
          <Navigation />

          {/* SEARCH */}
          <img
            className="search-icon"
            src={icon}
            alt="Search"
          />

          {/* PROFILE */}
          <Link to="/ProfilePath">
            <img
              className="img-icon"
              src={me}
              alt="Profile"
            />
          </Link>
        </div>

      </div>
    </div>
  );
}

