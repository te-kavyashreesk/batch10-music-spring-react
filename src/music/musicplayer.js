import { Link, Route, Switch } from "react-router-dom";
import AddSong from "../components/AddSong"
import Home from "../components/Home";
import DisplayAll from "../components/displayall";


export const musicplayer= (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          World of Music
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/addsong">
                AddSong
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/displayall">
                DisplaySong
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route path="/addsong" component={AddSong} />
      <Route path="/displayall" component={DisplayAll} />
      <Route path="/home" component={Home} />
    </Switch>
  </>
);