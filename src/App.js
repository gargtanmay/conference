import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Call from './components/Call'
import Submit from './components/Submit'
import Contact from './components/Contact'
import Dates from './components/Dates'
import "./App.css";
import img from "./images/1200px-Institution_of_Engineers_(India)_Logo.svg.png"
import img1 from "./images/download.png"
import img2 from "./images/M.B.M._Engineering_College_-_Logo.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
    return (
        <Router>
            <div style={
                {overflowX: "hidden"}
            }>
            <div style={{display:"flex" , 
                height: "200px ",
                alignItems:" center" ,
                justifyContent:"space-around" ,
                backgroundColor: "#B3FFED"}}>
                    <img src="" alt="" />
            <img src={img} alt="" style={{height: "100px", width:"100px"}} />

            <div>
                <p style={{
                    
                        textAlign: "center", 
                        width: "700px", 
                        fontWeight: "bold",
                        fontSize:"22px"
                
                }}>
                    36
                    <sup>th</sup>
                    National Convention of  Electrical Engineers
                    on
                    <br />
                    "Future Electricity Systems: Challenges and Current Trends"
                    <br />
                    Organized by
                    <br />
                    Institution of Engineers (Jodhpur Local Center), IIT Jodhpur and MBM Engineering College
                </p>
            </div>
            <img src={img1} alt=""  style={{height: "100px",width:"100px"}} />
            <img src={img2} alt=""  style={{height: "100px",width:"100px"}} />
        </div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <Link to="/">
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/call">
                                    <a class="nav-link active">Call for Papers</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/submit">
                                <a class="nav-link active" aria-current="page" href="#">Paper Submission
                                </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/dates">
                                <a class="nav-link active" aria-current="page" href="#">Important Dates
                                </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Venue
                                </a>
                            </li>

                            <li class="nav-item">
                            <Link to="/contact">
                                <a class="nav-link active" aria-current="page" href="#">Contact Us
                                </a>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                <Switch>
                <div className="row" style={{padding:"20px" ,backgroundColor: "#edc4b3"}}>
                  
                  <div className="col-8">
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/dates">
                        <Dates/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/submit">
                        <Submit/>
                    </Route>
                    <Route path="/call">
                        <Call/>
                    </Route>
                    </div>
                </div>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
