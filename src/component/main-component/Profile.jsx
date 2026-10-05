import "./Profile.css"
import Akan from "../../assets/Akan1.png";
import home from "../../assets/home1.png";
import discover from "../../assets/discover1.jpg";
import wath from "../../assets/watch.png";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { UseNameContext } from "../../contaxt API/UserContext";
import MovieText from "./MovieText";


export default
function Profile() {
    const { UseName, Email } = UseNameContext();
    return(
        <div className="normal">
            <div className="General-profile">
            <header className="profile-header">
                <MovieText 
                header2="Profile"
                />
            </header>
            
            <section className="profile-section">
                <div className="profile-div">
                    
                    <img src={Akan} />
                 
                    
                    <h2>{UseName}</h2>
                    <p>{Email}</p>
                </div>
            </section>

            <section>
                <div className="general-div">
                    <div className="watch-lists">
                        <h3>Watchlist</h3>
                        <span>
                             <p>24 movies</p>
                            <p>&gt;</p>
                        </span>
                    </div>
                    <div className="favourite">
                        <h3>Favourites</h3>
                        <span >
                            <p>12 movies</p>
                            <p>&gt;</p>
                        </span>
                        
                    </div>
                    <div className="recent-view">
                        <h3>Recently Viewed</h3>
                        <span>
                            <p>8 movies</p>
                            <p>&gt;</p>
                        </span>
                    </div>
                </div>
            </section>

            <div className="logout">
                <a href="#">Log Out</a>
            </div>

            <footer className="general-footee">
                <div className="gen-foot">
                    <div className="homer-foot">
                       <Link to="/">
                       <img src={home}/>
                        <p>Home</p>
                  </Link>
                    </div>
                    <div className="discover-foot">
                      <Link to="/discoverMovie">
                       <img src={discover}/>
                        <p>Discover</p>
                  </Link>
                    </div>
                    <div className="watchlist">
                        <Link to="/watchPath">
                       <img src={wath}/>
                        <p>WatchList</p>
                  </Link>
                    </div>
                    <div className="profile">
                       <a href="#"> <img src={profile} />
                        <p>Profile</p></a>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    )
}