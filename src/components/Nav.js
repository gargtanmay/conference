import React from 'react'
import Call from './Call'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Nav() {
    return (
        <Router>
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                    <Link to="/"> <a class="nav-link active" aria-current="page" >Home</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/call"> <a class="nav-link active" >Call for Papers</a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Paper Submission
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Important Dates
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Venue
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Contact Us
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
        
        </div>
        </Router>
    )
}
