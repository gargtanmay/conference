import React from "react";

export default function Venue() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div class="card" style={{width:"50%"}}>
        <div class="card-body">
          <h4 class="card-title" style={{ borderBottom:"1px solid black"}}>Venue</h4>
          <br />
          <h5 class="card-title">1. Online Platform Through Webex</h5>
          <br />
          <h5 class="card-title">2. Offline</h5>
          <p class="card-text">
            The Institution of Engineers (India) Jodhpur Local Centre
            <br />
            Gaurav Path, Jodhpur 342011, Rajasthan
          </p>
        </div>
      </div>
    </div>
  );
}
