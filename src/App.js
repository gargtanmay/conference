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
import Registration from "./components/Registration";
import Tc from "./components/Tc";
import Nac from "./components/Nac";
import Oc from "./components/Oc";
import Pc from "./components/Pc";
import Special from "./components/Special";
import Awards from "./components/Awards";
import Venue from "./components/Venue";
import Keynote from "./components/Keynote";
import Schedule from "./components/Schedule";
import Brochure from "./download/Institution of Engineers  Brochure 2021 mbm DESIGN CHANGE.pdf"


function App() {
  return (
    <Router>
      <div style={{ overflowX: "hidden" }}>
      <div class="card">
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
          <img
            src={img}
            class="img"
            alt=""
            style={{ height: "100px", width: "100px" }}
          />

          <div>
            <p
            class='para'
              style={{
                textAlign: "center",
                width: "700px",
                fontWeight: "bold",
                
                margin: "0px",
              }}
            >
              36
              <sup>th </sup>
              National Convention of Electrical Engineers and Conference on
              <br />
              "Future Electricity Systems: Challenges and Current Trends"
            </p>
            <p
            class='para1'
              style={{
                textAlign: "center",
                width: "700px",

                
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
          <img
            src={img1}
            class="img"
            alt=""
            style={{ height: "100px", width: "100px" }}
          />
          <img
            src={img2}
            class="img"
            alt=""
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
              <Link to="/venue" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Venue
                </a>
              </li>
              </Link>

              <li class="nav-item">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>

        <div
          className="row"
          style={{
            padding: "20px",
            //height: "1600px",
            minHeight: "500px",
            backgroundColor: "#8d5a7b",
            //backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Switch>
            <div className="col col-lg-9 col-md-12 col-xs-12">
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
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/venue">
                <Venue />
              </Route>
              <Route path="/NAC">
                <Nac />
              </Route>
              <Route path="/TC">
                <Tc />
              </Route>
              <Route path="/PC">
                <Pc />
              </Route>
              <Route path="/OC">
                <Oc />
              </Route>
              <Route path="/special">
                <Special />
              </Route>
              <Route path="/keynote">
                <Keynote />
              </Route>
              <Route path="/schedule">
                <Schedule />
              </Route>
              <Route path="/awards">
                <Awards />
              </Route>
            </div>
          </Switch>
          <div className="col col-lg-2 col-md-12 col-xs-12">
            <br />
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{width:"130px"}}
                    >
                      Committees
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                      style={{ padding: "10px" }}
                    >
                      <li>
                        <Link to="/NAC">
                          {" "}
                          <a className="dropdown-item" href="#">
                            National Advisory Committee
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/TC">
                          {" "}
                          <a className="dropdown-item" href="#">
                            Technical Committee
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/PC">
                          {" "}
                          <a className="dropdown-item" href="#">
                            Publication Committee
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/OC">
                          <a className="dropdown-item" href="#">
                            Organizing Committee
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <br />
                  
                  <a href={Brochure} target="_blank">
                  <button  type="button" class="btn btn-secondary" style={{width:"130px"}}>
                      Brochure
                    </button>
                    </a>
                  <br /><br />
                  <Link to="/registration">
                    <button type="button" class="btn btn-secondary" style={{width:"130px"}}>
                      Registration
                    </button>
                  </Link>
                  <br />
                  <br />
                  <Link to="/special">
                    <button type="button" class="btn btn-secondary" style={{width:"130px"}}>
                      Special Tracks
                    </button>
                  </Link>
                  
                  <br />
                  <br />
                  <Link to="/awards">
                    <button type="button" class="btn btn-secondary" style={{width:"130px"}}>
                      Awards
                    </button>
                  </Link>
                  <br />
                  <br />
                  <Link to="/schedule">
                    <button type="button" class="btn btn-secondary" style={{width:"130px"}}>
                      Schedule
                    </button>
                  </Link>
                  <br />
                  <br />
                  <Link to="/keynote">
                    <button type="button" class="btn btn-secondary" style={{width:"130px"}}>
                      Keynote Speakers
                    </button>
                  </Link>
                  
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
