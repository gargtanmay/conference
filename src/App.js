import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Call from "./components/Call";
import Submit from "./components/Submit";
import Contact from "./components/Contact";
import Dates from "./components/Dates";
import "./App.css";
import img from "./images/1200px-Institution_of_Engineers_(India)_Logo.svg.png";
import img1 from "./images/download.png";
import img2 from "./images/M.B.M._Engineering_College_-_Logo.png";
import img3 from "./images/pexels-photo-1292464.jpeg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ overflowX: "hidden" }}>
        <div
          style={{
            display: "flex",
            height: "270px ",
            alignItems: " center",
            justifyContent: "space-around",
            backgroundColor: "#caebfb",
            color: "black",
          }}
        >
          <img src={img} alt="" style={{ height: "100px", width: "100px" }} />

          <div>
            <p
              style={{
                textAlign: "center",
                width: "700px",
                fontWeight: "bold",
                fontSize: "22px",
                margin: "0px",
              }}
            >
              36
              <sup>th </sup>
              National Convention of Electrical Engineers on
              <br />
              "Future Electricity Systems: Challenges and Current Trends"
            </p>
            <p
              style={{
                textAlign: "center",
                width: "700px",

                fontSize: "18px",
                margin: "0px",
              }}
            >
              Organized by
              <b> Institution of Engineers (Jodhpur Local Center) </b>
              <br />
              in association with
              <br />
              <b> Indian Institute of Technology, Jodhpur</b>
              <br />
              and
              <br />
              <b> MBM Engineering College, Jodhpur </b>
            </p>
          </div>
          <img src={img1} alt="" style={{ height: "100px", width: "100px" }} />
          <img src={img2} alt="" style={{ height: "100px", width: "100px" }} />
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/call" style={{ textDecoration: "none" }}>
                  <a class="nav-link active">Call for Papers</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/submit" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Paper Submission
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/dates" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Important Dates
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Venue
                </a>
              </li>

              <li class="nav-item">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className="row"
          style={{
            padding: "20px",
            height: "1000px",
            backgroundColor: "#0095d9",
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Switch>
            <div className="col-9">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/dates">
                <Dates />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/submit">
                <Submit />
              </Route>
              <Route path="/call">
                <Call />
              </Route>
            </div>
          </Switch>
          <div className="col-2">
            <br />
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Committees
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                      style={{ padding: "10px" }}
                    >
                      <li >
                        <a className="dropdown-item" href="#">
                          National Advisory Committee
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Technical Committee
                        </a>
                      </li>
                      <li >
                        <a className="dropdown-item" href="#">
                          Publication Committee
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Organizing Committee
                        </a>
                      </li>
                    </ul>
                  </div>
                <br />
                <button type="button" class="btn btn-secondary">Registraion</button>
                
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
